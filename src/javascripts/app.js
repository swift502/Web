window.onscroll = function() {scrollFunction()};

function scrollFunction()
{
	if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
	{
		document.getElementById("navbar").style.borderColor = "#ccc";
	}
	else
	{
		document.getElementById("navbar").style.borderColor = "#fff";
	}
}

function emailToClipboard()
{
	const ta = document.createElement('textarea');
	ta.value = 'blaha.j502@gmail.com';
	document.body.appendChild(ta);
	ta.select();
	document.execCommand('copy');
	document.body.removeChild(ta);

	const copied = document.createElement('div');
	copied.classList.add('copied');
	copied.innerText = 'email\ncopied!';
	document.getElementById('email-copy').appendChild(copied);

	copied.addEventListener('animationend', () => removeCopiedPopup(copied));
	copied.addEventListener('webkitAnimationEnd', () => removeCopiedPopup(copied));
	copied.addEventListener('oAnimationEnd', () => removeCopiedPopup(copied));
	copied.addEventListener('MSAnimationEnd', () => removeCopiedPopup(copied));
}

function removeCopiedPopup(copied)
{
	document.getElementById('email-copy').removeChild(copied);
}