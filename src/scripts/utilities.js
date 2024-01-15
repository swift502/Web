export function extractFilename(path)
{
	return path.match(String.raw`[^\/]+(?=\.\w+$)`)[0];
}

export function getRandomInt(min, max)
{
	return Math.floor(Math.random() * (max - min + 1) + min);
}