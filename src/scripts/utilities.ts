export function extractFilename(path: string)
{
	const match = path.match(String.raw`[^\/]+(?=\.\w+$)`);
	if (match === null) throw new Error("No filename found in path: " + path);
	return match[0];
}

export function getRandomInt(min: number, max: number)
{
	return Math.floor(Math.random() * (max - min + 1) + min);
}