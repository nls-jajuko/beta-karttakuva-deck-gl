import React from 'react';
import {createRoot} from 'react-dom/client';
import DeckGL from '@deck.gl/react';
import {TerrainLayer} from '@deck.gl/geo-layers';

const API_TOKEN = '<INSERT-YOUR-API-KEY>'; 

const INITIAL_VIEW_STATE = {
  latitude: 67.01531,
  longitude: 27.21176,
  zoom: 14,
  pitch: 55,
  maxZoom: 15.5,
  bearing: 0,
  maxPitch: 89
};

const TERRAIN_IMAGE = `.../{z}/{y}/{x}.png?api-key=${API_TOKEN}`;
const SURFACE_IMAGE = `.../{z}/{y}/{x}.png?api-key=${API_TOKEN}`

// https://docs.mapbox.com/help/troubleshooting/access-elevation-data/#mapbox-terrain-rgb
// Note - the elevation rendered by this example is greatly exagerated!
const ELEVATION_DECODER = {
  rScaler: 6553.6,
  gScaler: 25.6,
  bScaler: 0.1,
  offset: -10000
};

const COLOR_SCHEME = [255, 255, 0]; // yellow



export default function App({initialViewState = INITIAL_VIEW_STATE}) {
  const layers = [
    new TerrainLayer({
      id: 'terrain',
      minZoom: 0,
      strategy: 'no-overlap',
      elevationDecoder: ELEVATION_DECODER,
      elevationData: TERRAIN_IMAGE,
      texture: SURFACE_IMAGE,
      wireframe: false,
      color: [255, 255, 255],
      operation: 'terrain+draw'
    })
  ];

  return (
    <DeckGL
      initialViewState={initialViewState}
      controller={true}
      layers={layers}
      getTooltip={getTooltip}
    />
  );
}

function getTooltip() {

}

export function renderToDOM(container) {
  createRoot(container).render(<App />);
}