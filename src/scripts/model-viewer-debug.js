import modelSettings from '../data/model-settings.yml';

let level = 0;
let debugEnabled = false;

document.addEventListener('keypress', (event) =>
{
	if (!debugEnabled)
	{
		let code = event.code;
	
		if (level == 0 && code == 'KeyD') level++;
		else if (level == 1 && code == 'KeyE') level++;
		else if (level == 2 && code == 'KeyB') level++;
		else if (level == 3 && code == 'KeyU') level++;
		else if (level == 4 && code == 'KeyG') level++;
		else level = 0;
	
		if (level == 5)
		{
			debugEnabled = true;

			let wrapper = document.createElement('div');
			wrapper.id = 'model-debug-wrapper';
			document.querySelector('.footer').appendChild(wrapper);

			let list = document.createElement('div');
			list.id = 'model-debug-list';
			wrapper.appendChild(list);

			modelSettings.forEach(model => {
				let button = document.createElement('div');
				button.classList.add('tile');
				button.innerHTML += model.name;
				button.onclick = () => {
					document.querySelector('model-viewer').setAttribute('src', `models/${model.name}.glb`);
					document.querySelector('model-viewer').setAttribute('min-field-of-view', `${model.fov}deg`);
				};

				list.appendChild(button);
			});

			setTimeout(() => {
				wrapper.style.opacity = '1';
				wrapper.style.top = '-70px';
			}, 0);
		}
	}

}, false);