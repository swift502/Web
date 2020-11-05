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
	alert("You're using an outdated web browser and the website will not display as intended. Please upgrade to a modern web browser to view the website properly.");
}