class Points {
  constructor({projectName, type, pathTiles, 
               minZoom, maxZoom, projectId, 
               typeVector, visibility, size, 
               valueVelMin, valueVelMax}) {
    this.projectName = projectName
    this.type = type
    this.pathTiles = pathTiles
    this.minZoom = minZoom
    this.maxZoom = maxZoom
    this.projectId = projectId
    this.typeVector = typeVector
    this.visibility = visibility
    this.size = size
    this.valueVelMin = valueVelMin
    this.valueVelMax = valueVelMax

  }
  async renderPoints() {
    
    await map.addSource(this.projectName, {
      "type": this.type,
      "tiles": [this.pathTiles],
      "minzoom": this.minZoom,
      "maxzoom": this.maxZoom
    })
    await map.addLayer({
      "id": this.projectId,
      "source": this.projectName,
      "source-layer": this.projectName,
      "type": this.typeVector,
      "layout": {
        "visibility": this.visibility
      },
      'paint': {
        "circle-radius": this.size,
        "circle-color": [
          "case",
          ["<", ["get", "VEL"], this.valueVelMin], "rgba(226,26,28, 1)",
          [">=", ["get", "VEL"], this.valueVelMin] && ["<=", ["get", "VEL"], -12], "rgba(239,117,16, 1)",
          [">=", ["get", "VEL"], -12] && ["<=", ["get", "VEL"], -9], "rgba(250,209,5, 1)",
          [">=", ["get", "VEL"], -9] && ["<=", ["get", "VEL"], -6], "rgba(255,243,24, 1)",
          [">=", ["get", "VEL"], -6] && ["<=", ["get", "VEL"], -3], "rgba(174,255,0, 1)",
          /* [">=", ["get", "VEL"], -3]  && ["<=", ["get", "VEL"], 3], "rgba(4,255,0, 1)", */
          [">=", ["get", "VEL"], 3] && ["<=", ["get", "VEL"], 6], "rgba(2,255,130, 1)",
          [">=", ["get", "VEL"], 6] && ["<=", ["get", "VEL"], 9], "rgba(1,255,203, 1)",
          [">=", ["get", "VEL"], 9] && ["<=", ["get", "VEL"], 12], "rgba(1,210,251, 1)",
          [">=", ["get", "VEL"], 12] && ["<=", ["get", "VEL"], this.valueVelMax], "rgba(0,121,246, 1)",
          [">", ["get", "VEL"], this.valueVelMax], "rgba(1,32,244, 1)",
          "rgba(4,255,0, 1)" //Range between -3 y 3 
        ]
      }
    })
    
  }
}
export { Points } 