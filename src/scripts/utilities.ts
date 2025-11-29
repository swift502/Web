export function extractFilename(path: string)
{
	return path.match(String.raw`[^\/]+(?=\.\w+$)`)[0];
}

export function getRandomInt(min: number, max: number)
{
	return Math.floor(Math.random() * (max - min + 1) + min);
}