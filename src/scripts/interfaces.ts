import type { BuiltinLanguage, SpecialLanguage } from 'shiki';

export interface ProjectData
{
    title: string;
    description: string;
    badge?: string;
    tags?: Array<string | number>;
    links?: Link[];
    page: Array<
        CodeProperties |
        ImageProperties |
        SketchfabProperties |
        TextProperties |
        VideoProperties |
        YoutubeProperties
    >;
}

export interface Link
{
    title: string;
    link: string;
}

export interface CodeProperties
{
    type: "code";
    data: string;
    lang: BuiltinLanguage | SpecialLanguage;
    file?: string;
    link?: string;
    desc?: string;
}

export interface ImageProperties
{
    type: "image";
    data: string;
    desc?: string;
}

export interface SketchfabProperties
{
    type: "sketchfab";
    model?: string;
    collection?: string;
    desc?: string;
}

export interface TextProperties
{
    type: "text";
    data: string;
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