mapboxgl.accessToken ='pk.eyJ1IjoidG9uaWxvZ2FyIiwiYSI6ImNqYjZlamY1dzBtMXEzM3FxbmppeXBpeHoifQ.DbzKh1wtO4p4QOUjj9eg1w'
const lng = 1.3800
const lat = 41.5000
const zoom = 7.9

//Create imageMap
const map = new mapboxgl.Map({
  container: 'map',
  style: 'https://geoserveis.icgc.cat/contextmaps/hibrid.json',
  center: [lng, lat],
  maxZoom: 25,
  minZoom: 1.65,
  zoom: zoom,
})
//Create imageMap
//Create demMap
map.on('load', function () {
  map.addSource('mapbox-dem', {
      'type': 'raster-dem',
      'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
      'tileSize': 512,
      'maxzoom': 14
  })
  // add the DEM source as a terrain layer with exaggerated height
  map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });

  // add a sky layer that will show when the map is highly pitched
  map.addLayer({
      'id': 'sky',
      'type': 'sky',
      'paint': {
          'sky-type': 'atmosphere',
          'sky-atmosphere-sun': [0.0, 0.0],
          'sky-atmosphere-sun-intensity': 15
      }
  })
})
//Create demMap
//Style cursor over de map
map.getCanvas().style.cursor = "default" 
/* map.on("mouseenter", "clusters", () => {
  map.getCanvas().style.cursor = "pointer"
})  */
map.on('mousemove', (e) => {
  /* console.log(e.lngLat.lng.toFixed(4) + ' Lng' )
  console.log(e.lngLat.lat.toFixed(4) + ' Lat') */
})
map.on('move', () => {
 /*  console.log(map.getZoom().toFixed(2) + ' Zoom')
  console.log(map.getPitch().toFixed(0) + ' Degree') */
})
