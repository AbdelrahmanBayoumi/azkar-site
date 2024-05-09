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
	return navigator.userAgent.indexOf('WOW64') != -1 || navigator.userAgent.indexOf('Win64') != -1;
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
