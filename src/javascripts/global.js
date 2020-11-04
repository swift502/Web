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