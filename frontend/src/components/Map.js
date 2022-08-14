import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import '../css/Map.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

mapboxgl.accessToken = "pk.eyJ1IjoidG9uaWxvZ2FyIiwiYSI6ImNqYjZlamY1dzBtMXEzM3FxbmppeXBpeHoifQ.DbzKh1wtO4p4QOUjj9eg1w";

const Map = () => {
  let coordinatesGeocoder = function (query) {
    // match anything which looks like a decimal degrees coordinate pair
    let matches = query.match(
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
     
    let coord1 = Number(matches[1]);
    let coord2 = Number(matches[2]);
    let geocodes = [];
    
    if (geocodes.length === 0) {
      geocodes.push(coordinateFeature(coord2, coord1));
    }
     
    return geocodes;
  };


  

  const mapContainerRef = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [1.380, 41.5],
      maxZoom: 25,
      minZoom: 1.65,
      zoom: 7.9
    });
    
    
    
    // Add dem sky
    map.on('load', function () {
      map.addSource('mapbox-dem', {
          'type': 'raster-dem',
          'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
          'tileSize': 512,
          'maxzoom': 14
      });
      // add the DEM source as a terrain layer with exaggerated height
      map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
      // Dem
      // Sky
      map.addLayer({
          'id': 'sky',
          'type': 'sky',
          'paint': {
          'sky-type': 'atmosphere',
          'sky-atmosphere-sun': [0.0, 0.0],
          'sky-atmosphere-sun-intensity': 15
          }
        });
        // Sky
    });
    // Add dem sky
    //Style cursor over de map
    map.getCanvas().style.cursor = 'default';
    map.on('mouseenter', 'clusters', () => {
    map.getCanvas().style.cursor = 'pointer'
    }) 
    
    // Add navigation control (the +/- zoom buttons)
    const nav = new mapboxgl.NavigationControl();

    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        localGeocoder: coordinatesGeocoder,
        zoom: 8,
        placeholder: 'toponym or Lat, long',
        mapboxgl: mapboxgl
    })
    ); 

  	map.addControl(nav);
    // Add navigation control (the +/- zoom buttons)
    // Geolocate ////////////////////////////////////
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true
    })); 

    map.addControl(new mapboxgl.ScaleControl({
      width: 80, 
      unit: 'metric'
      }));

     
    map.on('mousemove', function (e) {
      const lat= e.lngLat.lat;
      const lng= e.lngLat.lng;
      document.getElementById('coordinates').innerHTML = `Lat: ${lat} Long: ${lng}`;
    });
    map.on('dblclick', function (e) {
      let lat= e.lngLat.lat;
      let lng= e.lngLat.lng;
      document.getElementById('copiedCoordinates').innerHTML = `Lat: ${lat} Long: ${lng}`;
  });


      

  }, []); // eslint-disable-line react-hooks/exhaustive-deps

//Coordinates


  return (
    <div>
      <div className='map-container' ref={mapContainerRef}></div>
      <p className="catchCoordinates ">Double click copy the ground coordinates</p>
      <div className="copiedCoordinates" id="copiedCoordinates"></div>
      <div className="coordinates" id="coordinates"></div>
    </div>
    );
};


export default Map;
