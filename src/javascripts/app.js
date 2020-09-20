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