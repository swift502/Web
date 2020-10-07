function emailToClipboard()
{
	const el = document.createElement('textarea');
	el.value = 'blaha.j502@gmail.com';
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);

	// document.getElementById('copy-email');
	// aria-label="Whats up!" data-balloon-pos="up"
}

var aText = [
"hi, i'm ron",
"a web developer",
"based in riga, latvia",
"i drink a lot of tea",
"and build beautiful websites"
];

var iSpeed = 100; 
var iIndex = 0; 
var iArrLength = aText[0].length; 
var iTextPos = 0; 
	
function typewriter()
{
	var destination = document.getElementById("typewriter");

	destination.innerHTML = aText[iIndex].substring(0, iTextPos) + "_";
	if (iTextPos++ == iArrLength)
	{
		iTextPos = 0;
		const archiveText = aText[iIndex];
		iIndex++;
		if (iIndex == aText.length) iIndex = 0;
		iArrLength = aText[iIndex].length;
		setTimeout(() => {
			pushArchive(archiveText);
			typewriter();
		}, 500);
	} else
	{
		setTimeout("typewriter()", iSpeed);
	}
}

typewriter();

const archive = [];

function pushArchive(str)
{
	let div = document.createElement('div');
	div.innerText = str;
	document.getElementById('typewriter-history').appendChild(div);
	archive.unshift(div);

	refreshTransparency();
}

function refreshTransparency()
{
	for (let i = 0; i < archive.length; i++)
	{
		let opacity = 1 - (0.25 * (i + 1));
		archive[i].style.opacity = opacity;
	}

	while (archive[archive.length - 1].style.opacity <= 0)
	{
		archive[archive.length - 1].outerHTML = "";
		archive.pop();
	}
}