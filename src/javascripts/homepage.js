var aText = [
"game development",
// "game logic",
// "game feel",
"3d modelling",
"rigging",
"animation",
"javascript",
"typescript",
"c#",
"python",
// "ruby",
"blender",
"unity",
"gimp",

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
		const archiveText = aText[iIndex];
		if (++iIndex == aText.length) iIndex = 0;
		iArrLength = aText[iIndex].length;
		setTimeout(function() {
			pushArchive(archiveText);
			typewriter();
		}, 500);
	} else
	{
		setTimeout(typewriter, iSpeed);
	}
}

typewriter();

const archive = [];

function pushArchive(str)
{
	var div = document.createElement('div');
	div.innerText = str;
	document.getElementById('typewriter-history').appendChild(div);
	archive.unshift(div);

	refreshTransparency();
}

function refreshTransparency()
{
	for (var i = 0; i < archive.length; i++)
	{
		var opacity = 1 - (0.25 * (i + 1));
		archive[i].style.opacity = opacity;
	}

	while (archive[archive.length - 1].style.opacity <= 0)
	{
		archive[archive.length - 1].outerHTML = "";
		archive.pop();
	}
}