let selectedTag = document.getElementById("allTags");

function handlePosts(tagChoosen) {
    const articlesContainer = document.getElementById("articles");
    let postsHtml = "";
    posts.forEach((post) => {
        if (tagChoosen === "" || post.tags.includes(tagChoosen)) {
            if (post.image) {
                postsHtml += `
                <article>
                    ${getTitle(post.title)}
                    <img onclick="openImagePopUp(this, '${post.imageHighQualityURL}')" src="${post.thumbnail}" class="img-thumbnail opacity-hover" loading="lazy" alt="${post.thumbnailALT}">
                </article>
            `;
            } else {
                postsHtml += `
                <a href='${post.url}'><article>
                    ${getTitle(post.title)}
                    <img src="${post.thumbnail}" alt="${post.thumbnailALT}" class="img-thumbnail" loading=lazy>
                </article></a>
            `;
            }
        }
    });
    articlesContainer.innerHTML = postsHtml;
}

function getTitle(title) {
    if (title || title !== "") {

        return `<h3>${title}</h2>`
    } else {
        return "";
    }
}

function toggleTag(selectedTag, tagName) {
    handlePosts(tagName);
    for (const iterator of document.getElementsByClassName('tag')) {
        iterator.classList.remove('active-tag');
    }
    selectedTag.classList.add('active-tag')
}

toggleTag(selectedTag, "");

/*
    ------------------------- Photo Modal ---------------------------------
  */
let isModelOpen = false;
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");

// Get the image and insert it inside the modal - use its "alt" text as a caption
function openImagePopUp(img, imageHighQualityURL) {
    modal.style.display = "block";
    modalImg.src = img.src;
    if (imageHighQualityURL || imageHighQualityURL != "") {
        captionText.innerHTML = `
        <p dir=rtl>لتحميل الصورة بجودة عالية: <a href="${imageHighQualityURL}" target="_blank">⬇️ أضغط هنا ⬇️</a></p>
    `;
    } else {
        captionText.innerHTML = "";
    }

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