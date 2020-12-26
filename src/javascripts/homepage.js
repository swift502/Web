// Model viewer border style
const modelViewer = document.querySelector('model-viewer');
modelViewer.addEventListener('load', function(evt)
	{
		document.getElementById('model-viewer-wrapper').style.borderColor = '#fff';
	}
);
modelViewer.addEventListener('model-visibility', function(evt)
	{
		document.getElementById('model-viewer-wrapper').style.borderColor = '#fff';
	}
);

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
  }

// Load random model
modelNumber = getRandomInt(1, 9);
modelPath = 'models/' + modelNumber + '.glb';
modelViewer.setAttribute("src", modelPath);