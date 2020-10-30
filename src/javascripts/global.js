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
window.addEventListener('scroll', scrollFunction);

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
	copied.innerText = 'copied!';
	document.getElementById('email-copy').appendChild(copied);

	copied.addEventListener('animationend', function() {removeCopiedPopup(copied)});
	copied.addEventListener('webkitAnimationEnd', function() {removeCopiedPopup(copied)});
	copied.addEventListener('oAnimationEnd', function() {removeCopiedPopup(copied)});
	copied.addEventListener('MSAnimationEnd', function() {removeCopiedPopup(copied)});
}

function removeCopiedPopup(copied)
{
	document.getElementById('email-copy').removeChild(copied);
}