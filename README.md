# Web

Personal website built with [Astro](https://astro.build/).

## Features

- using the [\<model-viewer\>](https://github.com/google/model-viewer/tree/master/packages/model-viewer) component to display 3D models
- pages are dynamically from YAML project definition files
- a custom aspect ratio container component inspired by ArtStation image rendering, which maximazies it's size while maintaining it's aspect ratio and ensuring it's always fully contained within the screen
- also ArtStation inspired, images and internal videos have "Download" and "Open image in new tab" buttons, allowing you to easily download and inspect large images up close

## Building notes

1. Get [Node.js](https://nodejs.org)
2. Run `npm install`
3. Use `dev` and `build` tasks

### Viewing a specific 3D model

Type `debug` on the main page to display a model selector.
