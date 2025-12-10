const navbar = document.getElementById("navbar");
const shadowClass = "shadow";
const touchDevice = ('ontouchstart' in document.documentElement);
let prevScrollpos = window.scrollY;

function onScroll()
{
	if (touchDevice)
	{
		let currentScrollPos = window.scrollY;
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

	if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
	{
		if (!navbar.classList.contains(shadowClass))
		{
			navbar.classList.add(shadowClass);
		}
	}
	else if (navbar.classList.contains(shadowClass))
	{
		navbar.classList.remove(shadowClass);
	}
}

// Events
window.addEventListener('scroll', onScroll);