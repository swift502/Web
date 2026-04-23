export function extractFilename(path: string)
{
	const match = path.match(String.raw`[^\/]+(?=\.\w+$)`);
	if (!match) throw new Error(`Could not find filename in: ${path}`);
	return match[0];
}

/** Returns a random integer between `min` (inclusive) and `max` (inclusive). */
export function getRandomInt(min: number, max: number)
{
	return Math.floor(Math.random() * (max - min + 1) + min);
}