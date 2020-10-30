var descs = document.getElementsByClassName("content-description");

function onWindowResize()
{
	for (var i = 0; i < descs.length; i++)
	{
		var width = document.getElementById(descs[i].dataset.target).offsetWidth;
		descs[i].style.width = (width - 64) + 'px';
	};
}

window.addEventListener('resize', onWindowResize);
window.addEventListener('load', onWindowResize);
onWindowResize();