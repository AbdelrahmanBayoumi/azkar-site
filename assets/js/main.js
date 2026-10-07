/*
--------------------- Features Scroll -----------------------------
*/
const slider = document.querySelector('.scroll');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('slider-active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
const mouseleave = () => {
  isDown = false;
  slider.classList.remove('slider-active');
};
slider.addEventListener('mouseleave', mouseleave);

slider.addEventListener('mouseup', mouseleave);

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

/*
------------------------- Download Section -----------------------
*/
/**
 * Update version label with the latest release tag.
 * The static HTML value stays as fallback for crawlers and API outages.
 * @param {Array} releases: list of GitHub releases, newest first
 */
function initLatestVersion(releases) {
  if (!releases.length || !releases[0].tag_name) {
    return;
  }
  document.getElementById('version').innerText = releases[0].tag_name;
}

/**
 * Fetch Github Repo Release Data
 * @returns list of releases, or empty list when the API is unreachable
 */
async function getReleasesData(user, repo) {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${user}/${repo}/releases?page=1&per_page=5`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }
    );
    if (!res.ok) {
      return [];
    }
    const result = await res.json();
    return Array.isArray(result) ? result : [];
  } catch (error) {
    console.log('error:', error);
    return [];
  }
}

function initReleaseData(result) {
  let total64bit = 0;
  let total32bit = 0;
  let totaljar = 0;

  result.forEach((item) => {
    if (item.assets.length) {
      item.assets.forEach((asset) => {
        if (asset.name.indexOf('64') !== -1) {
          total64bit += asset.download_count;
        }
        if (asset.name.indexOf('32') !== -1) {
          total32bit += asset.download_count;
        }
        if (asset.name.indexOf('PortableJar_No-JRE') !== -1) {
          totaljar += asset.download_count;
        }
      });
    }
  });

  document.getElementById('win_exe64_counter').innerText = total64bit;
  document.getElementById('win_exe32_counter').innerText = total32bit;
  document.getElementById('jar_counter').innerText = totaljar;

  if (totaljar && total32bit && total64bit) {
    Array.from(document.getElementsByClassName('number-of-downloads')).forEach(
      (element, index, array) => {
        element.style.display = 'inline';
      }
    );
  }
}

/*
  ------------------------- Contact Us -----------------------
  */
let successAlert, dangerAlert;
/**
 * shows the Success Alert in Form with display:block;
 * @param {string} msg
 */
function showFormSuccess(msg) {
  dangerAlert.style.display = 'none';
  successAlert.style.display = 'block';
  successAlert.innerText = msg;
}

/**
 * shows the Error Alert in Form with display:block;
 * @param {string} msg
 */
function showFormError(msg) {
  successAlert.style.display = 'none';
  dangerAlert.style.display = 'block';
  dangerAlert.innerText = msg;
}

/**
 * submit contact-us form
 * @param {string} name
 * @param {string} email
 * @param {string} message
 */
function submit(name, email, message) {
  if (name == '' || email == '' || message == '') {
    showFormError('Please enter all Fields');
    return;
  }

  if (!isMail(email)) {
    showFormError('Email is not correct');
    return;
  }

  const queryString =
    '/formResponse?&entry.1748222099=' +
    encodeURIComponent(name) +
    '&entry.336933390=' +
    encodeURIComponent(email) +
    '&entry.1510931726=' +
    encodeURIComponent(message);

  fetch(
    'https://docs.google.com/forms/d/e/1FAIpQLSeeXmLteMQ1EHwM77C3Eg_9ksFZb__yc3qzG6tCESAkLIcwEw' +
      queryString,
    {
      method: 'POST',
      mode: 'no-cors',
      redirect: 'follow',
      referrer: 'no-referrer'
    }
  )
    .then(() => {
      showFormSuccess('Sent Successfully');
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    })
    .catch(() => {
      showFormError("Can't Send Your Response");
    });
}

/**
 * When Document loading is finished
 */
window.onload = () => {
  // fetch release data for download counters and latest version
  getReleasesData('AbdelrahmanBayoumi', 'Azkar-App')
    .then((result) => {
      initReleaseData(result);
      initLatestVersion(result);
    })
    .catch((error) => console.log('error:', error));

  // add action when form is submitted
  successAlert = document.getElementById('successAlert');
  dangerAlert = document.getElementById('dangerAlert');
  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    submit(name, email, message);
  });
};
/*
    ------------------------- Photo Modal ---------------------------------
    */
let isModelOpen = false;

const photoModal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const captionText = document.getElementById('caption');

// Get the image and insert it inside the modal - use its "alt" text as a caption
function openImagePopUp(img) {
  photoModal.style.display = 'block';
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
  isModelOpen = true;
}
photoModal.onclick = (e) => {
  if (e.target !== e.currentTarget) return;
  closeModel();
};
document.getElementById('closeModelButton').onclick = closeModel;

/*
------------------------- Download Modal ---------------------------------
*/
const downloadModal = document.getElementById('downloadModal');
const elem = document.getElementById('progress-bar');
let width = 1;
let interval;

function progressBar(callback) {
  resetProgressBar();

  interval = setInterval(frame, 100);

  function frame() {
    if (width >= 100) {
      clearInterval(interval);
      callback();
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}

function resetProgressBar() {
  width = 1;
  clearInterval(interval);
  elem.style.width = width + '%';
}

function openDownloadPopUp(url, version) {
  CustomEvents.clickDownloadRelease(version);
  downloadModal.style.display = 'block';
  document.getElementById('downloadVersionValue').innerHTML = version;
  progressBar(() => {
    CustomEvents.waitedForRelease(version);
    window.open(url, '_self');
  });
  isModelOpen = true;
}

downloadModal.onclick = (e) => {
  if (e.target !== e.currentTarget) return;
  closeModel();
};

function closeModel() {
  photoModal.style.display = 'none';
  downloadModal.style.display = 'none';
  resetProgressBar();
  isModelOpen = false;
}

document.getElementById('closeDownloadModelButton').onclick = closeModel;
document.addEventListener('keydown', function (e) {
  if (isModelOpen && e.key == 'Escape') {
    closeModel();
  }
});
