// Load random model
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const modelViewer = document.querySelector('model-viewer');
modelNumber = getRandomInt(1, 9);
modelPath = 'models/' + modelNumber + '.glb';
modelViewer.setAttribute("src", modelPath);