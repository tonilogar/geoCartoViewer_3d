map.on('load', function () {

  ////////////////// Green points //////////////////////////////////////
  map.addSource("CAT_S1_LOS_A030_202012_202112_Epsg_4326_wgs_84", {
      "type": "vector",
      "tiles": ["http://seinterferdev01:8080/data/CAT_S1_LOS_A030_202012_202112_Epsg_4326_wgs_84-f-pf-pk-o/{z}/{x}/{y}.pbf"],
      /* "url": "mapbox://tonilogar.84dugze6", */
      /*  "url": "http://localhost:8081/data/CAT_S1_UD_A132D037_201601_201912_4326_WSG_84-f-pf-pk.json",  */
      "minzoom": 0,
      "maxzoom": 14
  });
  map.addLayer({
      "id": "CAT_S1_LOS_A030_202012_202112_Epsg_4326_wgs_84",
      "source": "CAT_S1_LOS_A030_202012_202112_Epsg_4326_wgs_84",
      "source-layer": "CAT_S1_LOS_A030_202012_202112_Epsg_4326_wgs_84",
      "type": "circle",
      "layout": {
          "visibility": "visible"
      },
      'paint': {
          "circle-radius": 6,
          "circle-color": [
              "case",
              ["<", ["get", "VEL"], -15], "rgba(226,26,28, 1)",
              [">=", ["get", "VEL"], -15] && ["<=", ["get", "VEL"], -12], "rgba(239,117,16, 1)",
              [">=", ["get", "VEL"], -12] && ["<=", ["get", "VEL"], -9], "rgba(250,209,5, 1)",
              [">=", ["get", "VEL"], -9] && ["<=", ["get", "VEL"], -6], "rgba(255,243,24, 1)",
              [">=", ["get", "VEL"], -6] && ["<=", ["get", "VEL"], -3], "rgba(174,255,0, 1)",
              /* [">=", ["get", "VEL"], -3]  && ["<=", ["get", "VEL"], 3], "rgba(4,255,0, 1)", */
              [">=", ["get", "VEL"], 3] && ["<=", ["get", "VEL"], 6], "rgba(2,255,130, 1)",
              [">=", ["get", "VEL"], 6] && ["<=", ["get", "VEL"], 9], "rgba(1,255,203, 1)",
              [">=", ["get", "VEL"], 9] && ["<=", ["get", "VEL"], 12], "rgba(1,210,251, 1)",
              [">=", ["get", "VEL"], 12] && ["<=", ["get", "VEL"], 15], "rgba(0,121,246, 1)",
              [">", ["get", "VEL"], 15], "rgba(1,32,244, 1)",
              "rgba(4,255,0, 1)" //Range between -3 y 3 
          ]
      }
  });
  ////////////////// Green points //////////////////////////////////////
  ////////////////// Green points //////////////////////////////////////
  map.addSource("CAT_S1_LOS_A132_202012_202112_32631_4326", {
      "type": "vector",
      "tiles": ["http://seinterferdev01:8080/data/CAT_S1_LOS_A132_202012_202112_Epsg_4326_wgs_84-f-pf-pk-o/{z}/{x}/{y}.pbf"],
      /* "url": "mapbox://tonilogar.84dugze6", */
      /*  "url": "http://localhost:8081/data/CAT_S1_UD_A132D037_201601_201912_4326_WSG_84-f-pf-pk.json",  */
      "minzoom": 0,
      "maxzoom": 14
  });
  map.addLayer({
      "id": "CAT_S1_LOS_A132_202012_202112_32631_4326",
      "source": "CAT_S1_LOS_A132_202012_202112_32631_4326",
      "source-layer": "CAT_S1_LOS_A132_202012_202112_32631_4326",
      "type": "circle",
      "layout": {
          "visibility": "visible"
      },
      'paint': {
          "circle-radius": 6,
          "circle-color": [
              "case",
              ["<", ["get", "VEL"], -15], "rgba(226,26,28, 1)",
              [">=", ["get", "VEL"], -15] && ["<=", ["get", "VEL"], -12], "rgba(239,117,16, 1)",
              [">=", ["get", "VEL"], -12] && ["<=", ["get", "VEL"], -9], "rgba(250,209,5, 1)",
              [">=", ["get", "VEL"], -9] && ["<=", ["get", "VEL"], -6], "rgba(255,243,24, 1)",
              [">=", ["get", "VEL"], -6] && ["<=", ["get", "VEL"], -3], "rgba(174,255,0, 1)",
              /* [">=", ["get", "VEL"], -3]  && ["<=", ["get", "VEL"], 3], "rgba(4,255,0, 1)", */
              [">=", ["get", "VEL"], 3] && ["<=", ["get", "VEL"], 6], "rgba(2,255,130, 1)",
              [">=", ["get", "VEL"], 6] && ["<=", ["get", "VEL"], 9], "rgba(1,255,203, 1)",
              [">=", ["get", "VEL"], 9] && ["<=", ["get", "VEL"], 12], "rgba(1,210,251, 1)",
              [">=", ["get", "VEL"], 12] && ["<=", ["get", "VEL"], 15], "rgba(0,121,246, 1)",
              [">", ["get", "VEL"], 15], "rgba(1,32,244, 1)",
              "rgba(4,255,0, 1)" //Range between -3 y 3 
          ]
      }
  });
  ////////////////// Green points //////////////////////////////////////
 
  
  
 

});
