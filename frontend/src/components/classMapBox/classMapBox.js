import mapboxgl from 'mapbox-gl';
/* import './Map.css'; */
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
class StyleMap {
  //Private variables
  #objectMap //ObjectMap
  #styleMap //String
  #coordinatesCenterMap //Array float
  #maxZoom //Float
  #minZoom //Float
  #zoom //Float
  #accesToken //String
  #valuePitch
  constructor(_styleMap, _coordinatesCenterMap, _maxZoom, _minZoom, _zoom ) {
    this.#styleMap = _styleMap
    this.#coordinatesCenterMap = _coordinatesCenterMap
    this.#maxZoom = _maxZoom
    this.#minZoom = _minZoom
    this.#zoom = _zoom
    this.#accesToken = "pk.eyJ1IjoidG9uaWxvZ2FyIiwiYSI6ImNqYjZlamY1dzBtMXEzM3FxbmppeXBpeHoifQ.DbzKh1wtO4p4QOUjj9eg1w";
    mapboxgl.accessToken = this.#accesToken 
    this.#objectMap = new mapboxgl.Map({
      container: "map",
      style: this.#styleMap,
      center: this.#coordinatesCenterMap,
      maxZoom: this.#maxZoom,
      minZoom: this.#minZoom,
      zoom: this.#zoom
  });
  this.#valuePitch = this.#objectMap.getPitch()
  }
  
  getAccesToken() {
    return this.#accesToken
  }
  setAccesToken(_accesToken) {
    this.#accesToken = _accesToken
  }

  getValuePitch() {
    return  this.#valuePitch
  }

  setValuePitch(valuePitch) {
    this.#valuePitch = valuePitch
  }

  getStyleMap() {
    return this.#styleMap
  }
  setStyleMap(_styleMap) {
    this.#styleMap = _styleMap
  }

  getCoordinatesCenterMap() {
    return this.#coordinatesCenterMap
  }
  setCoordinatesCenterMap(_coordinatesCenterMap) {
    this.#coordinatesCenterMap = _coordinatesCenterMap
  }

  getMaxZoom() {
    return this.#maxZoom
  }
  setMaxZoom(_maxZoom) {
    this.#maxZoom = _maxZoom
  }

  getMinZoom() {
    return this.#minZoom
  }
  setMinZoom(_minZoom) {
    this.#minZoom = _minZoom
  }

  getZoom() {
    return  this.#zoom
  }
  setZoom(_zoom) {
    this.#zoom = _zoom
  }

}
export default StyleMap;
