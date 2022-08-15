const aText = ASTRO_typewriterStrings;
const iSpeed = 100;
let iIndex = 0;
let iArrLength = aText[0].length;
let iTextPos = 0;
const archive = [];

function typewriter()
{
	const destination = document.getElementById("typewriter");

	destination.innerHTML = aText[iIndex].substring(0, iTextPos) + "_";
	if (iTextPos++ == iArrLength)
	{
		iTextPos = 0;
		const archiveText = aText[iIndex];
		if (++iIndex == aText.length) iIndex = 0;
		iArrLength = aText[iIndex].length;
		setTimeout(function() {
			pushArchive(archiveText);
			typewriter();
		}, 500);
	}
	else
	{
		setTimeout(typewriter, iSpeed);
	}
}

function pushArchive(str)
{
	const div = document.createElement('div');
	div.innerText = str;
	document.getElementById('typewriter-history').appendChild(div);
	archive.unshift(div);

	refreshTransparency();
}

function refreshTransparency()
{
	for (let i = 0; i < archive.length; i++)
	{
		const opacity = 1 - (0.25 * (i + 1));
		archive[i].style.opacity = opacity;
	}

	while (archive[archive.length - 1].style.opacity <= 0)
	{
		archive[archive.length - 1].outerHTML = "";
		archive.pop();
	}
}

typewriter();