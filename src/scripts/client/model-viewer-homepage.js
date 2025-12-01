import modelList from '../../data/models.yml';
import { getRandomInt, extractFilename } from '../utilities';
const modelViewer = document.querySelector('model-viewer');

function setModel(index)
{
	const model = modelList[index];
	modelViewer.setAttribute('src', `/models/${model.name}`);
	modelViewer.setAttribute('min-field-of-view', `${model.fov}deg`);
}

function showDebugMenu(element)
{
	element.style.opacity = '1';
	element.style.top = '-70px';
}

// Initial random model
setModel(getRandomInt(0, modelList.length - 1));

// Debug
let level = 0;
const debugCode = ['KeyD', 'KeyE', 'KeyB', 'KeyU', 'KeyG']
document.addEventListener('keypress', (event) =>
{
	if (level == debugCode.length) return;

	if (debugCode[level] == event.code) level++;
	else level = 0;

	if (level == debugCode.length)
	{
		let wrapper = document.createElement('div');
		wrapper.id = 'model-debug-wrapper';
		document.querySelector('.footer').appendChild(wrapper);

		let list = document.createElement('div');
		list.id = 'model-debug-list';
		wrapper.appendChild(list);

		modelList.forEach((model, index) =>
		{
			let button = document.createElement('div');
			button.classList.add('tile');
			button.innerHTML = extractFilename(model.name);
			button.onclick = () =>
			{
				setModel(index);
			};

			list.appendChild(button);
		});

		setTimeout(() => showDebugMenu(wrapper), 0);
	}
});