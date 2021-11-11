/*
  ------------------------- NavBar ---------------------------------
*/
const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navBarLinks = document.getElementsByClassName('navbar-links');
toggleButton.addEventListener('click', () => {
  for (let i = 0; i < navBarLinks.length; i++) {
    navBarLinks[i].classList.toggle('active');
  }
});

/*
  ------------------------- General Functions ------------------------
*/
/**
 * scroll to specific id in DOM
 * @param {string} id: element id in DOM
 */
function scrollToID(id) {
  document.getElementById(id).scrollIntoView();
}

/**
 * hide element from the DOM with display:none;
 * @param {string} id: element id in DOM
 */
function hide(id) {
  document.getElementById(id).style.display = 'none';
}

/**
 * check if OS if 64-bit or not
 * @returns true if the OS is 64-bit and false otherwise
 */
function is64Bit() {
  return (navigator.userAgent.indexOf("WOW64") != -1 ||
    navigator.userAgent.indexOf("Win64") != -1)
}

/**
 * check if mail is correct
 * @param {string} mailString 
 * @returns true if email format is valid, and false otherwise
 */
function isMail(mailString) {
  var reg1 = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  return reg1.test(mailString);
}
/*
  --------------------- Features Scroll -----------------------------
*/
const slider = document.querySelector(".scroll");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", e => {
  isDown = true;
  slider.classList.add("slider-active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
const mouseleave = () => {
  isDown = false;
  slider.classList.remove("slider-active");
}
slider.addEventListener("mouseleave", mouseleave);

slider.addEventListener("mouseup", mouseleave);

slider.addEventListener("mousemove", e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

/*
  ------------------------- Download Section -----------------------
*/
const versionNumber = "0.9.4";
document.getElementById("version").innerText = versionNumber;
/**
 * GET number of downloads for specific VersionNumber
 * @param {string} version 
 */
function initNumberOfDownloads(version) {
  fetch("https://api.github.com/repos/AbdelrahmanBayoumi/Azkar-App/releases/tags/" + version)
    .then(result => result.json())
    .then(json => {
      // console.log("data:", data);
      json.assets.forEach(asset => {
        if (asset.name.indexOf("32") !== -1) {
          document.getElementById("win_exe32_counter").innerText = asset.download_count;
        } else if (asset.name.indexOf("64") !== -1) {
          document.getElementById("win_exe64_counter").innerText = asset.download_count;
        } else if (asset.name.indexOf("Jar") !== -1) {
          document.getElementById("jar_counter").innerText = asset.download_count;
        }
        console.log("Name:", asset.name, ", Number of Downlads:", asset.download_count);
      });
      if (json.assets) {
        Array.from(document.getElementsByClassName("number-of-downloads")).forEach(
          (element, index, array) => {
            element.style.display = "inline";
          }
        );
      }
    }).catch(error => console.log('error', error));
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
  dangerAlert.style.display = "none";
  successAlert.style.display = "block";
  successAlert.innerText = msg;
}

/**
 * shows the Error Alert in Form with display:block;
 * @param {string} msg 
 */
function showFormError(msg) {
  successAlert.style.display = "none";
  dangerAlert.style.display = "block";
  dangerAlert.innerText = msg;
}

/**
 * submit contact-us form
 * @param {string} name 
 * @param {string} email 
 * @param {string} message 
 */
function submit(name, email, message) {
  if (name == "" || email == "" || message == "") {
    showFormError("Please enter all Fields");
    return;
  }

  if (!isMail(email)) {
    showFormError("Email is not correct");
    return;
  }

  const queryString = '/formResponse?&entry.1748222099=' + encodeURIComponent(name)
    + '&entry.336933390=' + encodeURIComponent(email)
    + '&entry.1510931726=' + encodeURIComponent(message);

  fetch('https://docs.google.com/forms/d/e/1FAIpQLSeeXmLteMQ1EHwM77C3Eg_9ksFZb__yc3qzG6tCESAkLIcwEw' + queryString, {
    method: "POST",
    mode: "no-cors",
    redirect: "follow",
    referrer: "no-referrer"
  }).then(() => {
    showFormSuccess("Sent Successfully")
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }).catch(() => {
    showFormError("Can't Send Your Response");
  });
}

/**
 * When Document loading is finished
 */
window.onload = () => {
  console.log(`is 64-bit OS => ${is64Bit()}`);
  // fetch number of downloads for each platform
  initNumberOfDownloads(versionNumber)

  // add action when form is submitted 
  successAlert = document.getElementById("successAlert");
  dangerAlert = document.getElementById("dangerAlert");
  document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    submit(name, email, message);
  });
}