/* Create map and make style */
mapboxgl.accessToken = "pk.eyJ1IjoidG9uaWxvZ2FyIiwiYSI6ImNqYjZlamY1dzBtMXEzM3FxbmppeXBpeHoifQ.DbzKh1wtO4p4QOUjj9eg1w";

var map = new mapboxgl.Map({
    container: "map",
    style: 'https://geoserveis.icgc.cat/contextmaps/hibrid.json',
    center: [1.3, 41.6],
    maxZoom: 25,
    minZoom: 1.65,
    zoom: 7.7
});
/* Create DEM */
map.on('load', function () {
    map.addSource('mapbox-dem', {
        'type': 'raster-dem',
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

/* add geocoder to map */

var coordinatesGeocoder = function (query) {
    // match anything which looks like a decimal degrees coordinate pair
    var matches = query.match(
        /^[ ]*(?:Lat: )?(-?\d+\.?\d*)[, ]+(?:Lng: )?(-?\d+\.?\d*)[ ]*$/i
    );
    if (!matches) {
        return null;
    }

    function coordinateFeature(lng, lat) {
        return {
            center: [lng, lat],
            geometry: {
                type: 'Point',
                coordinates: [lng, lat]
            },
            place_name: 'Lat: ' + lat + ' Lng: ' + lng,
            place_type: ['coordinate'],
            properties: {},
            type: 'Feature'
        };
    }

    var coord1 = Number(matches[1]);
    var coord2 = Number(matches[2]);
    var geocodes = [];

    /* if (coord1 < -90 || coord1 > 90) {
    // must be lng, lat
    geocodes.push(coordinateFeature(coord1, coord2));
    }
     
    if (coord2 < -90 || coord2 > 90) {
    // must be lat, lng
    geocodes.push(coordinateFeature(coord2, coord1));
    } */

    if (geocodes.length === 0) {
        // else could be either lng, lat or lat, lng
        /* geocodes.push(coordinateFeature(coord1, coord2)); */
        geocodes.push(coordinateFeature(coord2, coord1));
    }

    return geocodes;
};
/* add geocoder to map */
var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    localGeocoder: coordinatesGeocoder,
    zoom: 8,
    placeholder: 'toponym or Lat, long',
    mapboxgl: mapboxgl
});
document.getElementById('section__Widgets--search').appendChild(geocoder.onAdd(map));
// Controls navigation (zoom, rotation) /////////////
let controlNavigation = new mapboxgl.NavigationControl();

document.getElementById('section__Widgets--cNavigation').appendChild(controlNavigation.onAdd(map));
// Controls navigation (zoom, rotation) /////////////
// Geolocate ////////////////////////////////////
let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
});

document.getElementById('section__Widgets--geo').appendChild(geolocate.onAdd(map));
// Geolocate ////////////////////////////////////
/* var inspect = new MapboxInspect();
document.getElementById('inspect').appendChild(inspect.onAdd(map)); */
//Change cursor
/* map.getCanvas().style.cursor = 'default'; */

// Camera heigth ////////////////////////////////////
var scale = new mapboxgl.ScaleControl({
    width: 80,
    unit: 'metric'
});

document.getElementById('widgetCameraHeight').appendChild(scale.onAdd(map));
// Camera heigth ////////////////////////////////////

// Coordinates ////////////////////////////////////
map.on('mousemove', function (e) {
    let lat = e.lngLat.lat;
    let lng = e.lngLat.lng;
    document.getElementById('widgetCoordinates').innerHTML = `Lat: ${lat.toFixed(15)} Long: ${lng.toFixed(15)}`;
});

map.on('dblclick', function (e) {
    let lat = e.lngLat.lat;
    let lng = e.lngLat.lng;
    document.getElementById('widgetCopyCoordinates').innerHTML = `Lat: ${lat} Long: ${lng}`;
});

