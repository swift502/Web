import models from '../../data/models.yml';
import { getRandomInt, extractFilename } from '../utilities';

// Functions
function setModel(index)
{
	const modelViewer = document.querySelector('model-viewer');
	const model = models[index];
	modelViewer.setAttribute('src', `/models/${model.name}`);
	modelViewer.setAttribute('min-field-of-view', `${model.fov}deg`);
}

// Debug
const debugCode = ['KeyD', 'KeyE', 'KeyB', 'KeyU', 'KeyG'];
let level = 0;
function onKeyPress(event)
{
	if (level == debugCode.length) return;

	if (debugCode[level] == event.code) level++;
	else level = 0;

	if (level == debugCode.length)
	{
		let container = document.createElement('div');
		container.id = 'model-debug';
		document.querySelector('body').appendChild(container);

		let list = document.createElement('div');
		list.classList.add('model-debug-list');
		container.appendChild(list);

		models.forEach((model, index) =>
		{
			let button = document.createElement('div');
			button.classList.add('model-debug-item', 'tile');
			button.innerHTML = extractFilename(model.name);
			button.addEventListener('click', () => setModel(index));
			
			list.appendChild(button);
		});
	}
}

// Events
document.addEventListener('keypress', onKeyPress);

// Init
setModel(getRandomInt(0, models.length - 1));