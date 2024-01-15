let touchDevice = ('ontouchstart' in document.documentElement);
let prevScrollpos = window.scrollY;

window.addEventListener('scroll', () =>
{
    let navbar = document.getElementById("navbar");

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

    let navbarShadowClass = "shadow";
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
});