/*
--------------------- Features Scroll -----------------------------
*/
const slider = document.querySelector(".scroll");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("slider-active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
const mouseleave = () => {
    isDown = false;
    slider.classList.remove("slider-active");
};
slider.addEventListener("mouseleave", mouseleave);

slider.addEventListener("mouseup", mouseleave);

slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});

/*
------------------------- Download Section -----------------------
*/
const versionNumber = "1.0.0";
document.getElementById("version").innerText = versionNumber;
/**
 * GET number of downloads for specific VersionNumber
 * @param {string} version
 */
function initNumberOfDownloads(version) {
    fetch(
            "https://api.github.com/repos/AbdelrahmanBayoumi/Azkar-App/releases/tags/" +
            version
        )
        .then((result) => result.json())
        .then((json) => {
            // console.log("data:", data);
            json.assets.forEach((asset) => {
                if (asset.name.indexOf("32") !== -1) {
                    document.getElementById("win_exe32_counter").innerText =
                        asset.download_count;
                } else if (asset.name.indexOf("64") !== -1) {
                    document.getElementById("win_exe64_counter").innerText =
                        asset.download_count;
                } else if (asset.name.indexOf("Jar") !== -1) {
                    document.getElementById("jar_counter").innerText =
                        asset.download_count;
                }
                console.log(
                    "Name:",
                    asset.name,
                    ", Number of Downlads:",
                    asset.download_count
                );
            });
            if (json.assets) {
                Array.from(
                    document.getElementsByClassName("number-of-downloads")
                ).forEach((element, index, array) => {
                    element.style.display = "inline";
                });
            }
        })
        .catch((error) => console.log("error", error));
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

    const queryString =
        "/formResponse?&entry.1748222099=" +
        encodeURIComponent(name) +
        "&entry.336933390=" +
        encodeURIComponent(email) +
        "&entry.1510931726=" +
        encodeURIComponent(message);

    fetch(
            "https://docs.google.com/forms/d/e/1FAIpQLSeeXmLteMQ1EHwM77C3Eg_9ksFZb__yc3qzG6tCESAkLIcwEw" +
            queryString, {
                method: "POST",
                mode: "no-cors",
                redirect: "follow",
                referrer: "no-referrer",
            }
        )
        .then(() => {
            showFormSuccess("Sent Successfully");
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        })
        .catch(() => {
            showFormError("Can't Send Your Response");
        });
}

/**
 * When Document loading is finished
 */
window.onload = () => {
    console.log(`is 64-bit OS => ${is64Bit()}`);
    // fetch number of downloads for each platform
    initNumberOfDownloads(versionNumber);

    // add action when form is submitted
    successAlert = document.getElementById("successAlert");
    dangerAlert = document.getElementById("dangerAlert");
    document.querySelector("form").addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        submit(name, email, message);
    });
};
/*
    ------------------------- Photo Modal ---------------------------------
  */
let isModelOpen = false;
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");

// Get the image and insert it inside the modal - use its "alt" text as a caption
function openImagePopUp(img) {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
    isModelOpen = true;
}

function closeModel() {
    modal.style.display = "none";
    isModelOpen = false;
}
modal.onclick = (e) => {
    if (e.target !== e.currentTarget) return;
    closeModel();
};
document.getElementById("closeModelButton").onclick = closeModel;
document.addEventListener("keydown", function(e) {
    if (isModelOpen && e.key == "Escape") {
        closeModel();
    }
});