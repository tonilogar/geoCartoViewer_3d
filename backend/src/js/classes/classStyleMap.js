
class StyleMap {
  constructor(_styleMap, _coordinatesCenterMap, _maxZoom, _minZoom, _zoom ) {
    this.styleMap = _styleMap
    this.coordinatesCenterMap = _coordinatesCenterMap
    this.maxZoom = _maxZoom
    this.minZoom = _minZoom
    this.zoom = _zoom
    const pepe = new mapboxgl.Map({
      container: "map",
      style: this.styleMap,
      center: this.coordinatesCenterMap,
      maxZoom: this.maxZoom,
      minZoom: this.minZoom,
      zoom: this.zoom
  });
  }

  getStyleMap() {
    return this.styleMap
  }
  setStyleMap(_styleMap) {
    this.styleMap = _styleMap
  }

  getCoordinatesCenterMap() {
    return this.coordinatesCenterMap
  }
  setCoordinatesCenterMap(_coordinatesCenterMap) {
    this.coordinatesCenterMap = _coordinatesCenterMap
  }
  getMaxZoom() {
    return this.maxZoom
  }
  setMaxZoom(_maxZoom) {
    this.maxZoom = _maxZoom
  }

  getMinZoom() {
    return this.minZoom
  }
  setMinZoom(_minZoom) {
    this.minZoom = _minZoom
  }

  getZoom() {
    return  this.zoom
  }
  setZoom(_zoom) {
    this.zoom = _zoom
  }

}
export default StyleMap;