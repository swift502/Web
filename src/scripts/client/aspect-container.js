let aspectContainers = document.getElementsByClassName("aspect-container");
let descs = document.getElementsByClassName("content-description");

function getInsetHeight(width, height, container)
{
	let padding = getComputedStyle(container).padding;
	padding = padding.replace('px', '');
	console.log(padding);
	padding = parseInt(padding) * 2;

	const aspectRatio = width / height;
	const insetWidth = width - padding;
	const insetHeight = insetWidth / aspectRatio;

	const newWidth = insetWidth + padding;
	const newHeight = insetHeight + padding;
	const newAspectRatio = newWidth / newHeight;

	return width / newAspectRatio;
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
				height = getInsetHeight(width, height, container);

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
				height = getInsetHeight(width, height, container);

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