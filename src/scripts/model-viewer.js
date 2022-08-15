function getRandomInt(min, max)
{
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// Get random model data
const modelSettings = ASTRO_modelSettings;
const modelIndex = getRandomInt(0, modelSettings.length - 1);
const model = modelSettings[modelIndex];

// Construct parameters
const modelPath = 'models/' + model.name + '.glb';
const modelFov = model.fov + 'deg';

// Set model viewer parameters
document.querySelector('model-viewer').setAttribute('src', modelPath);
document.querySelector('model-viewer').setAttribute('min-field-of-view', modelFov);