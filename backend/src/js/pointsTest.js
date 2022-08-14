
var circleRadius = 6;
map.on('load', function() {
    ////////////////// MINA_CAPELA_S1_EW points //////////////////////////////////////
    map.addSource("MINA_CAPELA_S1_EW_A078D041_201907_202101", {
        "type": "vector",
        "url": "http://seinterferdev01:8080/data/MINA_CAPELA_S1_EW_A078D041_201907_202101-f-pf-pk.json", 
        "minzoom": 0,
        "maxzoom": 14 
    });       
    map.addLayer({
        "id": "MINA_CAPELA_S1_EW_A078D041_201907_202101",
        "source": "MINA_CAPELA_S1_EW_A078D041_201907_202101",
        "source-layer": "MINA_CAPELA_S1_EW_A078D041_201907_202101",
        "type": "circle",
        "layout": {
        "visibility": "visible"
        },
        'paint': {
            "circle-radius": circleRadius,
            "circle-color": [
            "case",
                ["<",  ["get", "VEL"], -15], "rgba(226,26,28, 1)",
                [">=", ["get", "VEL"], -15] && ["<=", ["get", "VEL"], -12], "rgba(239,117,16, 1)",
                [">=", ["get", "VEL"], -12] && ["<=", ["get", "VEL"], -9], "rgba(250,209,5, 1)",
                [">=", ["get", "VEL"], -9]  && ["<=", ["get", "VEL"], -6], "rgba(255,243,24, 1)",
                [">=", ["get", "VEL"], -6]  && ["<=", ["get", "VEL"], -3], "rgba(174,255,0, 1)",
                [">=", ["get", "VEL"], 3]  && ["<=", ["get", "VEL"], 6], "rgba(2,255,130, 1)",
                [">=", ["get", "VEL"], 6]  && ["<=", ["get", "VEL"], 9], "rgba(1,255,203, 1)",
                [">=", ["get", "VEL"], 9]  && ["<=", ["get", "VEL"], 12], "rgba(1,210,251, 1)",
                [">=", ["get", "VEL"], 12] && ["<=", ["get", "VEL"], 15], "rgba(0,121,246, 1)",
                [">",  ["get", "VEL"], 15], "rgba(1,32,244, 1)",
                "rgba(4,255,0, 1)" //Range between -3 y 3 
            ]
        }
    });
    ////////////////// MINA_CAPELA_S1_EW points //////////////////////////////////////
    ////////////////// MINA_CAPELA_S1_UD points //////////////////////////////////////
    map.addSource("MINA_CAPELA_S1_UD_A078D041_201907_202101", {
        "type": "vector",
        "url": "http://seinterferdev01:8080/data/MINA_CAPELA_S1_UD_A078D041_201907_202101-f-pf-pk.json", 
        "minzoom": 0,
        "maxzoom": 14 
    });       
    map.addLayer({
        "id": "MINA_CAPELA_S1_UD_A078D041_201907_202101",
        "source": "MINA_CAPELA_S1_UD_A078D041_201907_202101",
        "source-layer": "MINA_CAPELA_S1_UD_A078D041_201907_202101",
        "type": "circle",
        "layout": {
        "visibility": "visible"
        },
        'paint': {
            "circle-radius": circleRadius,
            "circle-color": [
            "case",
                ["<",  ["get", "VEL"], -15], "rgba(226,26,28, 1)",
                [">=", ["get", "VEL"], -15] && ["<=", ["get", "VEL"], -12], "rgba(239,117,16, 1)",
                [">=", ["get", "VEL"], -12] && ["<=", ["get", "VEL"], -9], "rgba(250,209,5, 1)",
                [">=", ["get", "VEL"], -9]  && ["<=", ["get", "VEL"], -6], "rgba(255,243,24, 1)",
                [">=", ["get", "VEL"], -6]  && ["<=", ["get", "VEL"], -3], "rgba(174,255,0, 1)",
                [">=", ["get", "VEL"], 3]  && ["<=", ["get", "VEL"], 6], "rgba(2,255,130, 1)",
                [">=", ["get", "VEL"], 6]  && ["<=", ["get", "VEL"], 9], "rgba(1,255,203, 1)",
                [">=", ["get", "VEL"], 9]  && ["<=", ["get", "VEL"], 12], "rgba(1,210,251, 1)",
                [">=", ["get", "VEL"], 12] && ["<=", ["get", "VEL"], 15], "rgba(0,121,246, 1)",
                [">",  ["get", "VEL"], 15], "rgba(1,32,244, 1)",
                "rgba(4,255,0, 1)" //Range between -3 y 3 
            ]
        }
    });
    ////////////////// MINA_CAPELA_S1_UD points //////////////////////////////////////
    ////////////////// Bucharest points //////////////////////////////////////
    map.addSource("BUCHAREST_S1_LOS_D109_201701_202012", {
        "type": "vector",
        "url": "http://seinterferdev01:8080/data/BUCHAREST_S1_LOS_D109_201701_202012-f-pf-pk.json", 
        "minzoom": 0,
        "maxzoom": 14 
    });       
    map.addLayer({
        "id": "BUCHAREST_S1_LOS_D109_201701_202012",
        "source": "BUCHAREST_S1_LOS_D109_201701_202012",
        "source-layer": "BUCHAREST_S1_LOS_D109_201701_202012",
        "type": "circle",
        "layout": {
        "visibility": "visible"
        },
        'paint': {
            "circle-radius": circleRadius,
            "circle-color": [
            "case",
                ["<",  ["get", "VEL"], -15], "rgba(226,26,28, 1)",
                [">=", ["get", "VEL"], -15] && ["<=", ["get", "VEL"], -12], "rgba(239,117,16, 1)",
                [">=", ["get", "VEL"], -12] && ["<=", ["get", "VEL"], -9], "rgba(250,209,5, 1)",
                [">=", ["get", "VEL"], -9]  && ["<=", ["get", "VEL"], -6], "rgba(255,243,24, 1)",
                [">=", ["get", "VEL"], -6]  && ["<=", ["get", "VEL"], -3], "rgba(174,255,0, 1)",
                [">=", ["get", "VEL"], 3]  && ["<=", ["get", "VEL"], 6], "rgba(2,255,130, 1)",
                [">=", ["get", "VEL"], 6]  && ["<=", ["get", "VEL"], 9], "rgba(1,255,203, 1)",
                [">=", ["get", "VEL"], 9]  && ["<=", ["get", "VEL"], 12], "rgba(1,210,251, 1)",
                [">=", ["get", "VEL"], 12] && ["<=", ["get", "VEL"], 15], "rgba(0,121,246, 1)",
                [">",  ["get", "VEL"], 15], "rgba(1,32,244, 1)",
                "rgba(4,255,0, 1)" //Range between -3 y 3 
            ]
        }
    });
    ////////////////// Bucharest points //////////////////////////////////////
    ////////////////// Green points //////////////////////////////////////
    map.addSource("CAT_S1_UD_A132D037_201601_201912_EPSG_4326_WGS_84", {
        "type": "vector",
        /* "tiles": ["http://localhost:8081/data/CAT_S1_UD_A132D037_201601_201912_EPSG_4326_WGS_84-f-pf-pk/{z}/{x}/{y}.pbf"], */
        /* "url": "mapbox://tonilogar.84dugze6", */
        "url": "http://seinterferdev01:8080/data/CAT_S1_UD_A132D037_201601_201912_EPSG_4326_WGS_84-f-pf-pk.json", 
        "minzoom": 0,
        "maxzoom": 14 
    });       
    map.addLayer({
        "id": "Green",
        "source": "CAT_S1_UD_A132D037_201601_201912_EPSG_4326_WGS_84",
        "source-layer": "CAT_S1_UD_A132D037_201601_201912_EPSG_4326_WGS_84",
        "type": "circle",
        "layout": {
        "visibility": "visible"
        },
        /* "paint": {
            "circle-radius": 8,
            "circle-color": "orange"
        } */
        'paint': {
            "circle-radius": circleRadius,
            "circle-color": [
            "case",
                ["<",  ["get", "VEL"], -15], "rgba(226,26,28, 1)",
                [">=", ["get", "VEL"], -15] && ["<=", ["get", "VEL"], -12], "rgba(239,117,16, 1)",
                [">=", ["get", "VEL"], -12] && ["<=", ["get", "VEL"], -9], "rgba(250,209,5, 1)",
                [">=", ["get", "VEL"], -9]  && ["<=", ["get", "VEL"], -6], "rgba(255,243,24, 1)",
                [">=", ["get", "VEL"], -6]  && ["<=", ["get", "VEL"], -3], "rgba(174,255,0, 1)",
                /* [">=", ["get", "VEL"], -3]  && ["<=", ["get", "VEL"], 3], "rgba(4,255,0, 1)", */
                [">=", ["get", "VEL"], 3]  && ["<=", ["get", "VEL"], 6], "rgba(2,255,130, 1)",
                [">=", ["get", "VEL"], 6]  && ["<=", ["get", "VEL"], 9], "rgba(1,255,203, 1)",
                [">=", ["get", "VEL"], 9]  && ["<=", ["get", "VEL"], 12], "rgba(1,210,251, 1)",
                [">=", ["get", "VEL"], 12] && ["<=", ["get", "VEL"], 15], "rgba(0,121,246, 1)",
                [">",  ["get", "VEL"], 15], "rgba(1,32,244, 1)",
                "rgba(4,255,0, 1)" //Range between -3 y 3 
            ]
        }
    });
    ////////////////// Green points ////////////////////////////id//////////
    ////////////////// Blue points //////////////////////////////////////
    map.addSource("CAT_S1_UD_A030D110_201601_201912_EPSG_4326_WGS_84", {
        "type": "vector",
        /* "tiles": ["http://localhost:8081/data/CAT_S1_UD_A030D110_201601_201912_EPSG_4326_WGS_84-f-pf-pk/{z}/{x}/{y}.pbf"], */
        "url": "http://seinterferdev01:8080/data/CAT_S1_UD_A030D110_201601_201912_EPSG_4326_WGS_84-f-pf-pk.json",
        "minzoom": 0,
        "maxzoom": 14
    });       
    map.addLayer({
        "id": "blue",
        "source": "CAT_S1_UD_A030D110_201601_201912_EPSG_4326_WGS_84",
        "source-layer": "CAT_S1_UD_A030D110_201601_201912_EPSG_4326_WGS_84",
        "type": "circle",
        "layout": {
        "visibility": "visible"
        },
        'paint': {
            "circle-radius": circleRadius,
            "circle-color": [
            "case",
                ["<",  ["get", "VEL"], -15], "rgba(226,26,28, 1)",
                [">=", ["get", "VEL"], -15] && ["<=", ["get", "VEL"], -12], "rgba(239,117,16, 1)",
                [">=", ["get", "VEL"], -12] && ["<=", ["get", "VEL"], -9], "rgba(250,209,5, 1)",
                [">=", ["get", "VEL"], -9]  && ["<=", ["get", "VEL"], -6], "rgba(255,243,24, 1)",
                [">=", ["get", "VEL"], -6]  && ["<=", ["get", "VEL"], -3], "rgba(174,255,0, 1)",
                /* [">=", ["get", "VEL"], -3]  && ["<=", ["get", "VEL"], 3], "rgba(4,255,0, 1)", */
                [">=", ["get", "VEL"], 3]  && ["<=", ["get", "VEL"], 6], "rgba(2,255,130, 1)",
                [">=", ["get", "VEL"], 6]  && ["<=", ["get", "VEL"], 9], "rgba(1,255,203, 1)",
                [">=", ["get", "VEL"], 9]  && ["<=", ["get", "VEL"], 12], "rgba(1,210,251, 1)",
                [">=", ["get", "VEL"], 12] && ["<=", ["get", "VEL"], 15], "rgba(0,121,246, 1)",
                [">",  ["get", "VEL"], 15], "rgba(1,32,244, 1)",
                "rgba(4,255,0, 1)" //Range between -3 y 3 
            ]
        }
    });
    ////////////////// Blue points //////////////////////////////////////
    ////////////////// Red points //////////////////////////////////////
    map.addSource("CAT_S1_UD_A132D110_201601_201912_EPSG_4326_WGS_84", {
        "type": "vector",
        /* "tiles": ["http://localhost:8081/data/CAT_S1_UD_A132D110_201601_201912_EPSG_4326_WGS_84-f-pf-pk/{z}/{x}/{y}.pbf"], */
        "url": "http://seinterferdev01:8080/data/CAT_S1_UD_A132D110_201601_201912_EPSG_4326_WGS_84-f-pf-pk.json",
        "minzoom": 0,
        "maxzoom": 14 
    });       
    map.addLayer({
        "id": "Red",
        "source": "CAT_S1_UD_A132D110_201601_201912_EPSG_4326_WGS_84",
        "source-layer": "CAT_S1_UD_A132D110_201601_201912_EPSG_4326_WGS_84",
        "type": "circle",
        "layout": {
        "visibility": "visible"
        },
        'paint': {
            "circle-radius": circleRadius,
            "circle-color": [
            "case",
                ["<",  ["get", "VEL"], -15], "rgba(226,26,28, 1)",
                [">=", ["get", "VEL"], -15] && ["<=", ["get", "VEL"], -12], "rgba(239,117,16, 1)",
                [">=", ["get", "VEL"], -12] && ["<=", ["get", "VEL"], -9], "rgba(250,209,5, 1)",
                [">=", ["get", "VEL"], -9]  && ["<=", ["get", "VEL"], -6], "rgba(255,243,24, 1)",
                [">=", ["get", "VEL"], -6]  && ["<=", ["get", "VEL"], -3], "rgba(174,255,0, 1)",
                /* [">=", ["get", "VEL"], -3]  && ["<=", ["get", "VEL"], 3], "rgba(4,255,0, 1)", */
                [">=", ["get", "VEL"], 3]  && ["<=", ["get", "VEL"], 6], "rgba(2,255,130, 1)",
                [">=", ["get", "VEL"], 6]  && ["<=", ["get", "VEL"], 9], "rgba(1,255,203, 1)",
                [">=", ["get", "VEL"], 9]  && ["<=", ["get", "VEL"], 12], "rgba(1,210,251, 1)",
                [">=", ["get", "VEL"], 12] && ["<=", ["get", "VEL"], 15], "rgba(0,121,246, 1)",
                [">",  ["get", "VEL"], 15], "rgba(1,32,244, 1)",
                "rgba(4,255,0, 1)" //Range between -3 y 3 
            ]
        }
    });
    ////////////////// Red points //////////////////////////////////////
}); 
