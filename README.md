# Web

Personal website built with [Astro](https://github.com/withastro/astro).

## Features

- [YAML based](/src/data/) content management with schema validation
- modular project pages composed of [content blocks](/src/content_blocks/)
- [\<model-viewer\>](https://github.com/google/model-viewer) integration
- custom aspect ratio container component inspired by ArtStation image rendering, which maximizes it's size while maintaining it's aspect ratio and ensuring it's always fully contained within the screen

### Viewing a specific 3D model

Type `debug` on the main page to display a model selector.

## Build notes

1. Get [Node.js](https://nodejs.org)
2. Run `npm install`
3. Use `dev` and `build` tasks

### Update dependencies

```shell
npm update --save
```