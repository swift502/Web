function getUrlModelNumber()
{
	var URLparams = getUrlParams();
	if ('character' in URLparams) return URLparams['character'];
	else return getRandomInt(1, 9);
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

var modelNumber = getUrlModelNumber();
var modelPath = 'models/' + modelNumber + '.glb';
document.querySelector('model-viewer').setAttribute("src", modelPath);