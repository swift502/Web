function getUrlModelNumber()
{
	var URLparams = getUrlParams();
	if ('character' in URLparams) return URLparams['character'];
	else return getRandomInt(1, 15);
}

function getUrlParams()
{
	var url = window.location.search
	var url = url.split('#')[0]
	var urlParams = {}
	var queryString = url.split('?')[1]
	if (!queryString) {
		if (url.search('=') !== false) {
			queryString = url
		}
	}
	if (queryString) {
		var keyValuePairs = queryString.split('&')
		for (var i = 0; i < keyValuePairs.length; i++) {
			var keyValuePair = keyValuePairs[i].split('=')
			var paramName = keyValuePair[0]
			var paramValue = keyValuePair[1] || ''
			urlParams[paramName] = decodeURIComponent(paramValue.replace(/\+/g, ' '))
		}
	}
	return urlParams
}

function getRandomInt(min, max)
{
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set model path
var modelNumber = getUrlModelNumber();
var modelPath = 'models/' + modelNumber + '.glb';
document.querySelector('model-viewer').setAttribute('src', modelPath);

// Set FOV
var fovs = {
	1: 52,
	2: 57,
	3: 58,
	4: 60,
	5: 62,
	6: 57,
	7: 60,
	8: 57,
	9: 59,
	10: 55,
	11: 58,
	12: 53,
	13: 56,
	14: 60,
	15: 57
};
document.querySelector('model-viewer').setAttribute('min-field-of-view', fovs[modelNumber] + 'deg');