export function extractFilename(path: string)
{
	const match = path.match(String.raw`[^\/]+(?=\.\w+$)`);
	return match ? match[0] : path;
}

export function getRandomInt(min: number, max: number)
{
	return Math.floor(Math.random() * (max - min + 1) + min);
}