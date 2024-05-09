let allTags = document.getElementById('allTags');

function handlePosts(tagChoosen) {
	const articlesContainer = document.getElementById('articles');
	let postsHtml = '';
	let i = 0;
	ARTICLES.forEach((element) => {
		if (tagChoosen === '' || element.tags.includes(tagChoosen)) {
			postsHtml += `
        <a href='${element.url}'><article>
            ${getTitle(element.title)}
            <img src="${element.thumbnail}" alt="${element.thumbnailALT}" class="img-thumbnail" loading=lazy>
        </article></a>
        `;
		}
	});
	POSTS.sort(() => Math.random() - 0.5);
	POSTS.forEach((post) => {
		if (tagChoosen === '' || post.tags.includes(tagChoosen)) {
			postsHtml += `
                <article>
                    ${getTitle(post.title)}
                    <img onclick="openImagePopUp(${i})" src="${post.dirPath + post.thumbnail}" class="img-thumbnail opacity-hover" loading="lazy" alt="${post.thumbnailALT}">
                </article>
            `;
		}
		i++;
	});
	articlesContainer.innerHTML = postsHtml;
}

function getTitle(title) {
	if (title || title !== '') {
		return `<h3>${title}</h2>`;
	} else {
		return '';
	}
}

function toggleTag(selectedTag, tagName) {
	handlePosts(tagName);
	for (const iterator of document.getElementsByClassName('tag')) {
		iterator.classList.remove('active-tag');
	}
	selectedTag.classList.add('active-tag');
}

toggleTag(allTags, '');

/*
    ------------------------- Photo Modal ---------------------------------
  */
let isModelOpen = false;
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const captionText = document.getElementById('caption');

// Get the image and insert it inside the modal - use its "alt" text as a caption
let slideIndex = 1;
function openImagePopUp(imageIndex) {
	// render slide-show
	const slidesContainer = document.getElementById('slidesContainer');
	const demoContainer = document.getElementById('demoContainer');
	demoContainer.innerHTML = '';
	slidesContainer.innerHTML = '';
	const element = POSTS[imageIndex];
	for (let i = 0; i < element.images.length; i++) {
		slidesContainer.innerHTML += `
            <div class="slides">
                <div class="numbertext">${i + 1} / ${element.images.length}</div>
                <img src="${element.dirPath + element.images[i]}" alt="${element.thumbnailALT}">
                <a class="download" href="${(element.dirPath + element.images[i]).replace('jpg', 'png')}" download>⬇️ تحميل</a>
            </div>
        `;
		demoContainer.innerHTML += `
            <div class="slide-column">
                <img class="slide-demo cursor" src="${element.dirPath + element.images[i]}" style="width:100%" onclick="currentSlide(${i + 1})"
                alt="${element.thumbnailALT}">
            </div>
        `;
	}
	// select first one
	slideIndex = 1;
	showSlides(slideIndex);

	modal.style.display = 'block';
	isModelOpen = true;
}

function plusSlides(n) {
	showSlides((slideIndex += n));
}

function currentSlide(n) {
	showSlides((slideIndex = n));
}
function showSlides(n) {
	const slides = document.getElementsByClassName('slides');
	const dots = document.getElementsByClassName('slide-demo');
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (let i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' slide-active', '');
	}
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].className += ' slide-active';
}

function closeModel() {
	modal.style.display = 'none';
	isModelOpen = false;
}
modal.onclick = (e) => {
	if (e.target !== e.currentTarget) return;
	closeModel();
};
document.getElementById('closeModelButton').onclick = closeModel;
document.addEventListener('keydown', function (e) {
	if (isModelOpen && e.key == 'Escape') {
		closeModel();
	}
});
