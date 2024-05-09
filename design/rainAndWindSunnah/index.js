const mainContainer = document.getElementsByTagName('main')[0];

const data = [
	{
		title: 'عند سماع صوت الرعد',
		qoute: 'عن عبد الله بن الزبير أَنَّهُ كَانَ ‏إِذَا سَمِعَ الرَّعْدَ تَرَكَ الْحَدِيثَ، وَقَالَ: سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلَائِكَةُ مِنْ خِيفَتِهِ، ثُمَّ يَقُولُ: إِنَّ هَذَا لَوَعِيدٌ لِأَهْلِ الْأَرْضِ شَدِيدٌ.',
		highlighted: 'سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلَائِكَةُ مِنْ خِيفَتِهِ',
		qouteSource: 'https://dorar.net/h/3b67af77fdd1aefdc302ea44ef8e9628',
		imgURL: 'images/4.jpg',
		imgALT: 'عند سماع صوت الرعد',
		imageHighQualityURL: 'https://drive.google.com/file/d/1uHOfE3hEBHR1LsLGtP_LVNzPaQxFnyFO/view?usp=sharing',
	},
	{
		title: 'عند اشتداد الريح',
		qoute: 'كانَ النَّبيُّ صلَّى اللَّهُ علَيهِ وسلَّمَ إذا رأَى الرِّيحَ قالَ اللَّهُمَّ إنِّي أسألُكَ مِن خَيرِها وخَيرِ ما فيها وخَيرِ ما أُرْسِلَت بِهِ وأعوذُ بِكَ مِن شرِّها وشرِّ ما فيها وشرِّ ما أُرْسِلَت بِهِ',
		highlighted:
			'اللَّهُمَّ إنِّي أسألُكَ مِن خَيرِها وخَيرِ ما فيها وخَيرِ ما أُرْسِلَت بِهِ وأعوذُ بِكَ مِن شرِّها وشرِّ ما فيها وشرِّ ما أُرْسِلَت بِهِ',
		qouteSource: 'https://www.dorar.net/hadith/sharh/112326',
		imgURL: 'images/5.jpg',
		imgALT: 'عند اشتداد الريح',
		imageHighQualityURL: 'https://drive.google.com/file/d/16cNHqhWs0Q8-y29zNvZMEtYAZ6Xtx5BY/view?usp=sharing',
	},
	{
		title: 'عند نزول المطر',
		qoute: 'عن عائشة أم المؤمنين رضي الله عنها أنَّ رَسولَ اللَّهِ صَلَّى اللهُ عليه وسلَّمَ كانَ إذَا رَأَى المَطَرَ، قالَ: اللَّهُمَّ صَيِّبًا نَافِعًا.',
		highlighted: 'اللَّهُمَّ صَيِّبًا نَافِعًا',
		qouteSource: 'https://dorar.net/hadith/sharh/23349',
		imgURL: 'images/1.jpg',
		imgALT: 'عند نزول المطر',
		imageHighQualityURL: 'https://drive.google.com/file/d/1wqDnMUZpis2VTwqqqlsS0rR1yl93KAgj/view?usp=sharing',
	},
	{
		title: 'عند اشتداد المطر',
		qoute: 'عن أنس بن مالك رضي الله عنه دَخَلَ رَجُلٌ مِن ذلكَ البَابِ في الجُمُعَةِ المُقْبِلَةِ، ورَسولُ اللَّهِ صلَّى اللهُ عليه وسلَّمَ قَائِمٌ يَخْطُبُ، فَاسْتَقْبَلَهُ قَائِمًا، فَقالَ: يا رَسولَ اللَّهِ، هَلَكَتِ الأمْوَالُ وانْقَطَعَتِ السُّبُلُ، فَادْعُ اللَّهَ يُمْسِكْهَا، قالَ: فَرَفَعَ رَسولُ اللَّهِ صلَّى اللهُ عليه وسلَّمَ يَدَيْهِ، ثُمَّ قالَ: اللَّهُمَّ حَوَالَيْنَا، ولَا عَلَيْنَا، اللَّهُمَّ علَى الآكَامِ والجِبَالِ، والآجَامِ والظِّرَابِ، والأوْدِيَةِ ومَنَابِتِ الشَّجَرِ. قالَ: فَانْقَطَعَتْ، وخَرَجْنَا نَمْشِي في الشَّمْسِ',
		highlighted:
			'اللَّهُمَّ حَوَالَيْنَا، ولَا عَلَيْنَا، اللَّهُمَّ علَى الآكَامِ والجِبَالِ، والآجَامِ والظِّرَابِ، والأوْدِيَةِ ومَنَابِتِ الشَّجَرِ',
		qouteSource: 'https://dorar.net/hadith/sharh/9266',
		imgURL: 'images/2.jpg',
		imgALT: 'عند اشتداد المطر',
		imageHighQualityURL: 'https://drive.google.com/file/d/1aFvvAGzXPO2aesowyI6qq3Ynp7p7Sekc/view?usp=sharing',
	},
	{
		title: 'بعد نزول المطر',
		qoute: 'صَلَّى لَنَا رَسولُ اللَّهِ صَلَّى اللهُ عليه وسلَّمَ صَلَاةَ الصُّبْحِ بالحُدَيْبِيَةِ علَى إثْرِ سَمَاءٍ كَانَتْ مِنَ اللَّيْلَةِ، فَلَمَّا انْصَرَفَ أقْبَلَ علَى النَّاسِ، فَقالَ: هلْ تَدْرُونَ مَاذَا قالَ رَبُّكُمْ؟ قالوا: اللَّهُ ورَسولُهُ أعْلَمُ، قالَ: أصْبَحَ مِن عِبَادِي مُؤْمِنٌ بي وكَافِرٌ، فأمَّا مَن قالَ: مُطِرْنَا بفَضْلِ اللَّهِ ورَحْمَتِهِ، فَذلكَ مُؤْمِنٌ بي وكَافِرٌ بالكَوْكَبِ، وأَمَّا مَن قالَ: بنَوْءِ كَذَا وكَذَا، فَذلكَ كَافِرٌ بي ومُؤْمِنٌ بالكَوْكَبِ',
		highlighted: 'مُطِرْنَا بفَضْلِ اللَّهِ ورَحْمَتِهِ',
		qouteSource: 'https://dorar.net/hadith/sharh/2225',
		imgURL: 'images/3.jpg',
		imgALT: 'بعد نزول المطر',
		imageHighQualityURL: 'https://drive.google.com/file/d/1-A-BgKOrdGniVJce-05xmzh0PJVXq2od/view?usp=sharing',
	},
	// {
	//     title: "",
	//     qoute: "",
	//     highlighted: "",
	//     qouteSource: "",
	//     imgURL: "",
	//     imgALT: "",
	// },
];

let blockHTML = '';

function addBlock() {
	data.forEach((block) => {
		let finalQoute = block.qoute.replace(
			block.highlighted,
			`<span class="highlight-qoute">` + block.highlighted + `</span>`,
		);
		blockHTML += `
                <div class="article-block">
                        ${getTitle(block.title)}
                        ${getQuoteOnly(finalQoute, block.qouteSource)}
                        ${getImageOnly(block.imgURL, block.imgALT, block.imageHighQualityURL)}
                </div>
            `;
	});
	mainContainer.innerHTML = blockHTML;
}

function getTitle(title) {
	if (title || title != '') {
		return `<h3 dir="auto">📌 ${title}</h3>`;
	} else {
		return '';
	}
}

function getImageOnly(imgURL, imgALT, imageHighQualityURL) {
	if (imgURL === '') {
		return '';
	} else {
		return `<div class="article-img-box"> <img onclick="openImagePopUp(this, '${imageHighQualityURL}')" class="article-img opacity-hover" src="${imgURL}" alt="${imgALT}"> </div>`;
	}
}

function getQuoteOnly(qoute, qouteSource) {
	let s = `
    <div class="qoute-box">
        <p class="qoute">
            ${qoute}
        </p>
    `;
	if (qouteSource != '') {
		s += `<a class="qoute-source" href="${qouteSource}" target="_blank">
                المصدر
            </a>`;
	}
	return s + '</div>';
}

addBlock();

/*
    ------------------------- Photo Modal ---------------------------------
  */
let isModelOpen = false;
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const captionText = document.getElementById('caption');

// Get the image and insert it inside the modal - use its "alt" text as a caption
function openImagePopUp(img, imageHighQualityURL) {
	modal.style.display = 'block';
	modalImg.src = img.src;
	if (imageHighQualityURL || imageHighQualityURL != '') {
		captionText.innerHTML = `
            <p dir=rtl>لتحميل الصورة بجودة عالية: <a href="${imageHighQualityURL}" target="_blank">⬇️ أضغط هنا ⬇️</a></p>
        `;
	} else {
		captionText.innerHTML = '';
	}

	isModelOpen = true;
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
