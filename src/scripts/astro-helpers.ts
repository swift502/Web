import { marked } from 'marked';
import { htmlToText } from "html-to-text";
import { extractFilename } from './utilities';

import projectIndex from '../data/project-index.yml';
import siteData from '../data/site.yml';
import type { AstroInstance } from 'astro';
import type { PageInfo, PageInfoInput, ProjectData, Project } from './interfaces';

export function getProjects()
{
	let projects : Project[] = [];
	const dataFiles = import.meta.glob('/src/data/projects/*.yml', { eager: true });

	for (let i = 0; i < projectIndex.length; i++)
	{
		const projectName = projectIndex[i];
		const dataPath = `/src/data/projects/${projectName}.yml`;

		if (dataPath in dataFiles)
		{
			projects.push({
				'name': projectName,
				'data': dataFiles[dataPath] as ProjectData,
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
	const contentBlocks = import.meta.glob('/src/content_blocks/*.astro', { eager: true });
	
	Object.values(contentBlocks).forEach((block: AstroInstance) =>
	{
		let name = extractFilename(block.file).toLowerCase();
		library[name] = block.default
	});

	return library;
}

export function getPageInfo(input : PageInfoInput)
{
	const pageInfo: PageInfo = {};

	// Title
	pageInfo.title = input.title ?? siteData.title;
	if (input.titlePrepend) pageInfo.title = `${input.titlePrepend} - ${pageInfo.title}`;
	if (input.titleAppend) pageInfo.title = `${pageInfo.title} - ${input.titleAppend}`;

	// Info
	pageInfo.description = input.description ?? siteData.description;
	pageInfo.image = import.meta.env.SITE + (input.image ?? siteData.image);
	pageInfo.tab = input.tab;
	pageInfo.noIndex = input.noIndex;

	return pageInfo;
}

export function extractProjectDescription(project: Project)
{
	let desc = "";
	project.data.page.forEach(block =>
	{
		if (block.desc) desc += block.desc.replaceAll("\n", " ") + " ";
	});

	if (desc.length > 0)
	{
		desc = renderMarkdown(desc);
		desc = htmlToText(desc, {
			wordwrap: false,
			selectors: [
				{ selector: 'a', options: { ignoreHref: true } },
			],
		});

		if (desc.length > 160)
		{
			desc = desc.slice(0, 160);
			desc = desc.slice(0, desc.lastIndexOf(" "));
			desc += '...';
		}

		return desc;
	}
	else
	{
		return undefined;
	}
}

export function renderMarkdown(content: string)
{
	content = content.replaceAll("\n", "\n\n");
	return marked.parse(content, { async: false });
}

export function logError(message: string)
{
	console.error(`\u001b[91m${message}\u001b[0m`);
}