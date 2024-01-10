export function logError(message)
{
	console.error(`\u001b[91m${message}\u001b[0m`);
}

export function extractFilename(path)
{
	return path.match(String.raw`[^\/]+(?=\.\w+$)`)[0];
}

export function getRandomInt(min, max)
{
	return Math.floor(Math.random() * (max - min + 1) + min);
}