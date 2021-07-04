var touchDevice = ('ontouchstart' in document.documentElement);
var prevScrollpos = window.pageYOffset;

function scrollFunction()
{
	var navbar = document.getElementById("navbar");

	if (touchDevice)
	{
		var currentScrollPos = window.pageYOffset;
		if (prevScrollpos > currentScrollPos)
		{
			navbar.style.top = "0";
		}
		else
		{
			navbar.style.top = "-64px";
		}
		prevScrollpos = currentScrollPos;
	}

	var navbarShadowClass = "shadow";
	if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
	{
		if (!navbar.classList.contains(navbarShadowClass))
		{
			navbar.classList.add(navbarShadowClass);
		}
	}
	else if (navbar.classList.contains(navbarShadowClass))
	{
		navbar.classList.remove(navbarShadowClass);
	}
}

window.addEventListener('scroll', scrollFunction);

if (window.navigator.userAgent.match(/(MSIE|Trident)/))
{
	alert("You seem to be using an outdated web browser and the website may not display correctly. Please view this website in a modern web browser for it to display as intended.");
}

function fadeIn(el)
{
	el.style.opacity = 0;
	el.style.display = "block";

	(function fade() {
	  var val = parseFloat(el.style.opacity);
	  if (!((val += .1) > 1)) {
		el.style.opacity = val;
		requestAnimationFrame(fade);
	  } else {el.style.opacity = 1;}
	})();
}
