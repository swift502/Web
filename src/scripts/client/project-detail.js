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
	let frameViews = document.getElementsByClassName("frame-view");
	
	for (let i = 0; i < frameViews.length; i++)
	{
		let frameView = frameViews[i];
		let aspectRatio = frameView.dataset.width / frameView.dataset.height;

		let padding = 180;
		if (frameView.dataset.first_padding === 'true') padding += 100;
		if (frameView.dataset.desc_padding === 'true') padding += 100;
		if (frameView.dataset.links_padding === 'true') padding += 100;

		let width, height;

		if (window.innerWidth > 776)
		{
			//Desktop
			let maxWidth = frameView.parentElement.offsetWidth;
			height = Math.max(window.innerHeight - padding, 400);
			width = (height * aspectRatio);

			if (width > maxWidth)
			{
				width = maxWidth;
				height = width / aspectRatio;
			}

			if (frameView.dataset.inset === 'true')
				height = getInsetHeight(width, aspectRatio, frameView);

			frameView.style.width = width + 'px';
			frameView.style.height = height + 'px';
		}
		else
		{
			// Mobile
			frameView.style.width = '100%';

			width = frameView.clientWidth;
			height = width / aspectRatio;

			if (frameView.dataset.inset === 'true')
				height = getInsetHeight(width, aspectRatio, frameView);

			frameView.style.height = height + 'px';
		}
	}
}

function updateContentDescriptions()
{
	let descriptions = document.getElementsByClassName("content-description");

	for (let i = 0; i < descriptions.length; i++)
	{
		let description = descriptions[i];
		let target = document.getElementById(description.dataset.target);
		description.style.width = `${target.getBoundingClientRect().width}px`;
	}
}

function update()
{
	updateAspectContainers();
	updateContentDescriptions();
}

// Events
window.addEventListener('resize', update);

// Init
update();
document.querySelector('body').style.opacity = '1';