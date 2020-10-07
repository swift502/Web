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
	"test"
// "game development",
// "game logic",
// "game feel",
// "3d modelling",
// "rigging",
// "animation",
// "blender",
// "unity",
// "gimp",
// "javascript",
// "typescript",
// "c#",
// "python",

// "hi, i'm jan",
// "game developer",
// "based in czech republic",
// "i love 3d modelling",
// "rigging and animation",
// "writing game logic",
// "tuning game feel",
// "quaternions",
// "matrices",
// "shaders",
// "graphics programming",
// "and more"
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
		let delay = 500;
		const archiveText = aText[iIndex];
		iIndex = getRandomInt(0, aText.length - 1);
		// iIndex++;
		// if (iIndex == aText.length)
		// {
		// 	iIndex = 0;
		// 	delay = 2000;
		// }
		iArrLength = aText[iIndex].length;
		setTimeout(() => {
			pushArchive(archiveText);
			typewriter();
		}, delay);
	} else
	{
		setTimeout("typewriter()", iSpeed);
	}
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
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