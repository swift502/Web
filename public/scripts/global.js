if (window.navigator.userAgent.match(/(MSIE|Trident)/))
{
	alert("You seem to be using an outdated web browser and the website may not display correctly. Please view this website in a modern web browser for it to display as intended.");
}

function fadeIn(element)
{
	element.style.opacity = 1;
	element.style.animation = 'fadeIn 0.2s ease-out';
}
