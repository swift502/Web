var touchDevice = ('ontouchstart' in document.documentElement);
var prevScrollpos = window.pageYOffset;

function scrollFunction()
{
	if (touchDevice)
	{
		var currentScrollPos = window.pageYOffset;
		if (prevScrollpos > currentScrollPos)
		{
			document.getElementById("navbar").style.top = "0";
		}
		else
		{
			document.getElementById("navbar").style.top = "-64px";
		}
		prevScrollpos = currentScrollPos;
	}

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

if(window.navigator.userAgent.match(/(MSIE|Trident)/))
{
	alert("You seem to be using an outdated web browser and the website may not display correctly. Please view this website in a modern web browser for it to display as intended.");
}