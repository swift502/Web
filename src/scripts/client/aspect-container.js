let aspectContainers = document.getElementsByClassName("aspect-container");
let descs = document.getElementsByClassName("content-description");

function getInsetHeight(width, aspectRatio, container)
{
	let padding = getComputedStyle(container).padding;
	padding = parseFloat(padding) * 2;

	const insetWidth = width - padding;
	const insetHeight = insetWidth / aspectRatio;
	
	return insetHeight + padding;
}

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

			if (container.dataset.inset === 'true')
				height = getInsetHeight(width, aspectRatio, container);

			container.style.width = width + 'px';
			container.style.height = height + 'px';
		}
		else
		{
			// Mobile
			container.style.width = '100%';

			width = container.clientWidth;
			height = width / aspectRatio;

			if (container.dataset.inset === 'true')
				height = getInsetHeight(width, aspectRatio, container);

			container.style.height = height + 'px';
		}
	}

	// Descriptions update
	for (let i = 0; i < descs.length; i++)
	{
		let desc = descs[i];
		let target = document.getElementById(desc.dataset.target);
		desc.style.width = `${target.getBoundingClientRect().width}px`;
	}
}

// Update on window resize
window.addEventListener('resize', () =>
{
	updateAspectContainers();
});

// Initial update
updateAspectContainers();
document.querySelector('body').style.opacity = '1';