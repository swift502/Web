import type { BundledLanguage, SpecialLanguage } from 'shiki';

export interface Project
{
    name: string;
    data: ProjectData;
}

export interface ProjectData
{
    title: string;
    badge?: string;
    tags?: Array<string | number>;
    links?: Link[];
    page: Array<
        CodeProperties |
        ImageProperties |
        SketchfabProperties |
        VideoProperties |
        YoutubeProperties
    >;
}

export interface Link
{
    title: string;
    link: string;
}

export interface ContentBlockData<T>
{
	project: {
		name: string;
		data: ProjectData;
	},
	contentBlock: {
		index: number;
		properties: T;
	}
}

export interface CodeProperties
{
    type: "code";
    data: string;
    lang: BundledLanguage | SpecialLanguage;
    file?: string;
    desc?: string;
}

export interface ImageProperties
{
    type: "image";
    data: string;
    desc?: string;
    inset?: boolean;
}

export interface SketchfabProperties
{
    type: "sketchfab";
    model?: string;
    collection?: string;
    desc?: string;
}

export interface VideoProperties
{
    type: "video";
    data: string;
    desc?: string;
    width?: number;
    height?: number;
}

export interface YoutubeProperties
{
    type: "youtube";
    data: string;
    desc?: string;
}

export interface PageInfo
{
	title?: string;
	description?: string;
	image?: string;
	tab?: string;
	noIndex?: boolean;
}

export interface PageInfoInput extends PageInfo
{
	titlePrepend?: string;
	titleAppend?: string;
}