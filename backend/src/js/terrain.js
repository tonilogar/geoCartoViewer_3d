/* Create map and make style */
mapboxgl.accessToken = "pk.eyJ1IjoidG9uaWxvZ2FyIiwiYSI6ImNqYjZlamY1dzBtMXEzM3FxbmppeXBpeHoifQ.DbzKh1wtO4p4QOUjj9eg1w";

var map = new mapboxgl.Map({
    container: "map",
    /* style: "https://geoserveis.icgc.cat/contextmaps/icgc.json", */
    /* style: "mapbox://styles/mapbox/streets-v11", */
    /* style: 'https://geoserveis.icgc.cat/contextmaps/osm-bright.json' */
    /* style: 'https://tilemaps.icgc.cat/tileserver/styles/orto.json', maxZoom: 19,*/
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [1.380, 41.25],
    /* pitchWithRotate: false,
    dragRotate: false, */
    maxZoom: 25,
    minZoom: 1.65,
    /* pitch: 50, */
    zoom: 8.4
});
var layerList = document.getElementById('section__Widgets--BackgroundMap');
var inputs = layerList.getElementsByTagName('input');
 
function switchLayer(layer) {
var layerId = layer.target.id;
map.setStyle('mapbox://styles/mapbox/' + layerId);
}
 
for (var i = 0; i < inputs.length; i++) {
inputs[i].onclick = switchLayer;
}
/* Create DEM */
map.on('load', function () {
    map.addSource('mapbox-dem', {
        'type': 'raster-dem',
        /* 'url': 'mapbox://mapbox.terrain-rgb', */
        'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
        'tileSize': 512,
        'maxzoom': 14
    });
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
    });
});

map.getCanvas().style.cursor = 'default';
map.on('mouseenter', 'clusters', () => {
    map.getCanvas().style.cursor = 'pointer'
  })    


  