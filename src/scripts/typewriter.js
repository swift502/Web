import lines from '../data/typewriter.yml';

const currentLine = document.getElementById("typewriter");
const history = document.getElementById('typewriter-history');

const typingDelay = 100;
const nextLineDelay = 500;
const historyLength = 3;

let lineIndex = 0;
let letterIndex = 0;

function typewriter()
{
	currentLine.innerHTML = lines[lineIndex].substring(0, letterIndex) + "_";

	if (letterIndex < lines[lineIndex].length)
	{
		// Advance letter
		letterIndex++;
		setTimeout(typewriter, typingDelay);
	}
	else
	{
		// Go to next line
		letterIndex = 0;
		const lastLine = lines[lineIndex];

		lineIndex++;
		if (lineIndex == lines.length) lineIndex = 0;

		setTimeout(function() {
			pushHistory(lastLine);
			typewriter();
		}, nextLineDelay);
	}
}

function pushHistory(content)
{
	const div = document.createElement('div');
	div.innerText = content;
	history.appendChild(div);

	if (history.children.length > historyLength)
	{
		history.removeChild(history.firstChild);
	}

	refreshTransparency();
}

function refreshTransparency()
{
	let opacity = 1;
	const opacityDelta = 1 / (historyLength + 1);

	for (let i = history.children.length - 1; i >= 0; i--)
	{
		opacity -= opacityDelta;
		history.children[i].style.opacity = opacity;
	}
}

typewriter();