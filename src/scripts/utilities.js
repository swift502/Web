export async function forEachProject(projectCallback)
{
	// Projects list
	const projectsListGlob = import.meta.glob('/src/data/project-index.yml');
	const projectsListRaw = await projectsListGlob['/src/data/project-index.yml']();
	const projectsList = projectsListRaw['default'];

	// Projects data
	const projectsData = import.meta.glob('/src/data/projects/*.yml');

	// Iterate
	for (let i = 0; i < projectsList.length; i++)
	{
		const projectName = projectsList[i];
		const dataPath = '/src/data/projects/' + projectName + '.yml';

		if (!(dataPath in projectsData)) {
			logError('Data file not found for project: "' + projectName + '".');
			continue;
		}

		const projectData = await projectsData[dataPath]();

		projectCallback(projectName, projectData);
	}
}

export function constructPageTitle(pageInfo)
{
	if ('title' in pageInfo)
	{
		return pageInfo['title']
	}
	else
	{
		let pageTitle = 'Jan Bláha';
		if ('titlePrepend' in pageInfo) pageTitle = `${pageInfo['titlePrepend']} - ${pageTitle}`;
		if ('titleAppend' in pageInfo) pageTitle = `${pageTitle} - ${pageInfo['titleAppend']}`;

		return pageTitle
	}
}

export function logError(message)
{
	console.error(`\u001b[91m${message}\u001b[0m`);
}

export function extractFilename(path)
{
	return path.match('[\\w]+(?=\\.)')[0]
}

export function getRandomInt(min, max)
{
	return Math.floor(Math.random() * (max - min + 1) + min);
}