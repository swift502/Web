let aspectContainers = document.getElementsByClassName("aspect-container");
let descs = document.getElementsByClassName("content-description");

function updateAspectContainers()
{
	for (let i = 0; i < aspectContainers.length; i++)
	{
		let container = aspectContainers[i];
		let aspectRatio = container.dataset.width / container.dataset.height;

		let padding = 180;
		if (container.dataset.first_padding === 'true') padding += 100;
		if (container.dataset.desc_padding === 'true') padding += 100;
		if (container.dataset.links_padding === 'true') padding += 100;

		let width, height;

		if (window.innerWidth > 776)
		{
			//Desktop
			let maxWidth = container.parentElement.offsetWidth;
			height = Math.max(window.innerHeight - padding, 400);
			width = (height * aspectRatio);

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
	for (let i = 0; i < descs.length; i++)
	{
		let desc = descs[i];
		let target = document.getElementById(desc.dataset.target);
		desc.style.width = (target.offsetWidth - 62) + 'px';
	}
}

window.addEventListener('resize', () => {
	updateAspectContainers();
});

updateAspectContainers();