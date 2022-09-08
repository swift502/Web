/**
 * Log custom Astro error messages
 */
export function logError(message)
{
    console.error(`\u001b[91m${message}\u001b[0m`);
}

/**
 * Extract data from an Astro.glob() yml data object
 */
export function extractYml(glob)
{
    return glob[0]['default'];
}

/**
 * This function:
 * - executes the async data reading functions obtained by globbing many data files
 * - creates an ordered name:data dictionary matching the order found in the project index
 * - prints a human readable error in case an indexed project has no corresponding data
 * - provides a callback which executes while iterating over individual projects
 */
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