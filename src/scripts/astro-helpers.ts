import { marked } from 'marked';
import { extractFilename } from './utilities';

import projectIndex from '../data/project-index.yml';
import siteData from '../data/site.yml';
import type { AstroInstance } from 'astro';
import type { PageInfo, PageInfoOptions, ProjectData } from './interfaces';

export function getProjects() : { name: string, data: ProjectData }[]
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

export function getContentBlockLibrary() : any[]
{
	const library = [];
	const contentBlocks = import.meta.glob('../content_blocks/*.astro', { eager: true });
	
	Object.values(contentBlocks).forEach((block: AstroInstance) =>
	{
		let name = extractFilename(block.file).toLowerCase();
		library[name] = block.default
	});

	return library;
}

export function getPageInfo({title, titlePrepend, titleAppend, description, image, tab, noIndex = false} : PageInfoOptions) : PageInfo
{
	const pageInfo: PageInfo = {};

	// Title
	pageInfo.title = title ?? siteData.title;
	if (titlePrepend) pageInfo.title = `${titlePrepend} - ${pageInfo.title}`;
	if (titleAppend) pageInfo.title = `${pageInfo.title} - ${titleAppend}`;

	// Info
	pageInfo.description = description ?? siteData.description;
	pageInfo.image = import.meta.env.SITE + (image ?? siteData.image);
	pageInfo.tab = tab;
	pageInfo.noIndex = noIndex;

	return pageInfo;
}

export function renderMarkdown(content: string) : string
{
	content = content.replaceAll("\n", "\n\n");
	return marked.parse(content, { async: false });
}

export function logError(message: string) : void
{
	console.error(`\u001b[91m${message}\u001b[0m`);
}