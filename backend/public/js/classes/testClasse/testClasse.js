import "./mapbox.js" 

map.on('mousemove', (e) => {
  console.log(e.lngLat.lng.toFixed(4) + ' Lng' )
  console.log(e.lngLat.lat.toFixed(4) + ' Lat')
})