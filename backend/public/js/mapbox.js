mapboxgl.accessToken ='pk.eyJ1IjoidG9uaWxvZ2FyIiwiYSI6ImNqYjZlamY1dzBtMXEzM3FxbmppeXBpeHoifQ.DbzKh1wtO4p4QOUjj9eg1w'
const lng = 1.3800
const lat = 41.5000
const zoom = 7.9

//Create imageMap
const map = new mapboxgl.Map({
  container: 'map',
  style: 'https://geoserveis.icgc.cat/contextmaps/icgc_orto_hibrida.json',
  center: [lng, lat],
  maxZoom: 25,
  minZoom: 1.65,
  zoom: zoom,
  projection: 'globe'
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
  // Set the default atmosphere style
  map.setFog({});
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
  //Change cursor mouse
  map.getCanvas().style.cursor = "default"
  map.on("mouseenter", "clusters", () => {
    map.getCanvas().style.cursor = "pointer"
  })
  const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    placeholder: 'toponym or Lat, long',
    mapboxgl: mapboxgl
  })
  document.querySelector('.geocoder_Container').appendChild(geocoder.onAdd(map))

  // Geolocate ////////////////////////////////////
  const geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: true
  });
  document.querySelector('.geolocate_Container').appendChild(geolocate.onAdd(map))
  // Geolocate ////////////////////////////////////
  // Controls navigation (zoom, rotation) /////////////
  const controlNavigation = new mapboxgl.NavigationControl()
  document.querySelector('.NavigationControl_Container').appendChild(controlNavigation.onAdd(map))
  // Controls navigation (zoom, rotation) /////////////
  // Show coordinates /////////////
  document.querySelector('.coordinates_Container').innerHTML = `Lat: 00.0000 Long: 0.0000 `
  map.on('mousemove', (e) => {
    let lat = e.lngLat.lat.toFixed(4)
    let lng = e.lngLat.lng.toFixed(4)
    document.querySelector('.coordinates_Container').innerHTML = `Latitude: ${lat} Longitude: ${lng}`
  })
  // Show coordinates /////////////
  // Show zoom degree /////////////
  document.querySelector('.zoomDegree_Container').innerHTML = `Zoom: 7.70 Degree: 0   º  Scale:`
  map.on('move', () => {
    let zoom = map.getZoom().toFixed(2)
    let degree = map.getPitch().toFixed(0)
    document.querySelector('.zoomDegree_Container').innerHTML = `Zoom: ${zoom} Degree: ${degree}  º  Scale:`
  })
  // Show zoom degree /////////////
  // Copy coordinates /////////////
  document.querySelector('.copyCoor_Container').innerHTML = `Double click copy Latitude Longitude`
  map.on('dblclick', function (e) {
    let lat = e.lngLat.lat.toFixed(4)
    let lng = e.lngLat.lng.toFixed(4)
    document.querySelector('.copyCoor_Container').innerHTML = `Latitude: ${lat} Longitude: ${lng}`
  })
  // Copy coordinates /////////////
  // Camera heigth ///////////////
  let scale = new mapboxgl.ScaleControl({
    width: 80,
    unit: 'metric' 
  })
  document.querySelector('.cameraHeight_Container').appendChild(scale.onAdd(map))
  // Camera heigth //////////////
})

