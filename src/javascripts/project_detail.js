var images = document.getElementsByClassName("image-wrapper");
var descs = document.getElementsByClassName("content-description");

function onWindowResize()
{
	updateImages();
}

function updateImages()
{
	for (var i = 0; i < images.length; i++)
	{
		var wrapper = images[i];
		var image = wrapper.getElementsByTagName('img')[0];
		var aspectRatio = image.dataset.width / image.dataset.height;

		if (window.innerWidth > 776)
		{
			//Desktop
			var maxWidth = wrapper.parentElement.offsetWidth;
			var imgHeight = Math.max(window.innerHeight - image.dataset.padding, 500);
			var imgWidth = (imgHeight * aspectRatio);

			if (imgWidth > maxWidth)
			{
				imgWidth = maxWidth;
				imgHeight = imgWidth / aspectRatio;
			}
		}
		else
		{
			// Mobile
			imgWidth = window.innerWidth;
			imgHeight = imgWidth / aspectRatio;
		}

		wrapper.style.height = imgHeight + 'px';
		wrapper.style.width = imgWidth + 'px';
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
updateImages();