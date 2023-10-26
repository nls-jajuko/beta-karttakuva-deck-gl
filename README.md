
Proof-of-Concept based on
https://github.com/visgl/deck.gl/blob/8.9-release/examples/website/terrain-extension/README.md

### Usage

Copy the content of this folder to your project. 

To load the terrain tiles, you need a [NLS Finland API key](https://www.maanmittauslaitos.fi/rajapinnat/api-avaimen-ohje). You can either set an environment variable:	


Set `API_TOKEN` directly in `app.jsx`.

```bash
# install dependencies
npm install
# or
yarn
# bundle and serve the app with vite
npm start
```

### Data format

Mapbox's [terrain API](https://docs.mapbox.com/help/troubleshooting/access-elevation-data/#mapbox-terrain-rgb) encodes elevation data in raster tiles.

To use other data sources, check out
the [documentation of TerrainLayer](../../../docs/api-reference/geo-layers/terrain-layer.md).

