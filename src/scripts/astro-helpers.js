import { marked } from 'marked';
import { extractFilename } from './utilities';

import projectIndex from '../data/project-index.yml';
import siteData from '../data/site.yml';

export function getProjects()
{
	let projects = [];
	const dataFiles = import.meta.glob('/src/data/projects/*.yml', { eager: true });

	for (let i = 0; i < projectIndex.length; i++)
	{
		const projectName = projectIndex[i];
		const dataPath = `/src/data/projects/${projectName}.yml`;

		if (dataPath in dataFiles)
		{
			projects.push({
				'name': projectName,
				'data': dataFiles[dataPath],
			});
		}
		else
		{
			logError(`Project file for "${projectName}" not found`);
		}
	}

	return projects;
}

export function getContentBlockLibrary()
{
	const library = [];
	const contentBlocks = import.meta.glob('../content_blocks/*.astro', { eager: true });
	
	Object.values(contentBlocks).forEach((block) =>
	{
		let name = extractFilename(block.file).toLowerCase();
		library[name] = block.default
	});

	return library;
}

export function constructPageTitle(pageInfo)
{
	let title = pageInfo.title ?? siteData.title;
	if ('titlePrepend' in pageInfo) title = `${pageInfo.titlePrepend} - ${title}`;
	if ('titleAppend' in pageInfo) title = `${title} - ${pageInfo.titleAppend}`;

	return title;
}

export function renderMarkdown(content)
{
	content = content.replaceAll("\n", "\n\n");
	return marked.parse(content);
}

export function logError(message)
{
	console.error(`\u001b[91m${message}\u001b[0m`);
}