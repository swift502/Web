# Web

Personal website built with [Astro](https://github.com/withastro/astro).

## Features

- using the [\<model-viewer\>](https://github.com/google/model-viewer) component to display 3D models
- custom aspect ratio container component inspired by ArtStation image rendering, which maximizes it's size while maintaining it's aspect ratio and ensuring it's always fully contained within the screen
- project pages are defined in [YAML data files](/src/data/projects/)
- using [Marked](https://github.com/markedjs/marked) for markdown support
- using [Highlight.js](https://github.com/highlightjs/highlight.js) for code highlighting

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