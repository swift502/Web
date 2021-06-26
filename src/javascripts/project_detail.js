var aspectContainers = document.getElementsByClassName("aspect-container");
var descs = document.getElementsByClassName("content-description");

function onWindowResize()
{
	updateAspectContainers();
}

function updateAspectContainers()
{
	for (var i = 0; i < aspectContainers.length; i++)
	{
		var container = aspectContainers[i];
		var aspectRatio = container.dataset.width / container.dataset.height;

		var padding = 180;
		if (container.dataset.first_padding === 'true') padding += 100;
		if (container.dataset.desc_padding === 'true') padding += 100;
		if (container.dataset.links_padding === 'true') padding += 100;

		if (window.innerWidth > 776)
		{
			//Desktop
			var maxWidth = container.parentElement.offsetWidth;
			var height = Math.max(window.innerHeight - padding, 400);
			var width = (height * aspectRatio);

			if (width > maxWidth)
			{
				width = maxWidth;
				height = width / aspectRatio;
			}
		}
		else
		{
			// Mobile
			width = window.innerWidth;
			height = width / aspectRatio;
		}

		container.style.height = height + 'px';
		container.style.width = width + 'px';
	}

	// Descriptions update
	for (var i = 0; i < descs.length; i++)
	{
		var desc = descs[i]
		var target = document.getElementById(desc.dataset.target);
		desc.style.width = (target.offsetWidth - 62) + 'px';
	}
}

window.addEventListener('resize', onWindowResize);
// window.addEventListener('load', onWindowResize);
updateAspectContainers();