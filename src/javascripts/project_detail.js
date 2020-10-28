function onWindowResize()
{
	var descs = document.getElementsByClassName("content-description");

	for (var i = 0; i < descs.length; i++) {
		if (descs[i].dataset.target) {
			var width = document.getElementById(descs[i].dataset.target).offsetWidth;
			descs[i].style.width = (width - 64) + 'px';
		}
	};
}

window.addEventListener('resize', onWindowResize);
onWindowResize();