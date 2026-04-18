import { marked } from 'marked';
import removeMarkdown from "remove-markdown";
import { extractFilename } from './utilities';

import projectIndex from '../data/project-index.yml';
import siteData from '../data/site.yml';
import type { AstroInstance } from 'astro';
import type { PageInfo, PageInfoInput, ProjectData, Project } from './interfaces';
import { getCollection } from 'astro:content';
import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

export async function getProjects()
{
	let projects : Project[] = [];
	const content = await getCollection('projects');
	const contentDict = Object.fromEntries(content.map(project => [project.id, project]));

	projectIndex.forEach((projectEntry: string) =>
	{
		if (!contentDict.hasOwnProperty(projectEntry))
		{
			logError(`Project file for "${projectEntry}" not found`);
			return;
		}

		const project = contentDict[projectEntry];
		projects.push({
			'name': project.id,
			'data': project.data as ProjectData,
		});
	});

	return projects;
}

export function getContentBlockLibrary()
{
	const library: Record<string, AstroComponentFactory> = {};
	const contentBlocks: Record<string, AstroInstance> = import.meta.glob('/src/content_blocks/*.astro', { eager: true });
	
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
		desc = desc.trim();
		desc = removeMarkdown(desc);

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