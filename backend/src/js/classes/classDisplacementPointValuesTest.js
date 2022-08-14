class DisplacementPointValues {
  
  
  constructor() {
    map.on('click', function (e) {
      //Array to catch metadata points salect
      this.verticalValuesGraph = [];
      this.valuesDataPointDisplacenet = [];
      let propertiesPointsCatch = [];
      propertiesPointsCatch = map.queryRenderedFeatures(e.point);

      if (propertiesPointsCatch.length === 0) //If mouse don touch any point
      {
        console.log("There isn't point");
        return false;
      }
      else{
        console.log("There's point");
      }

      //only work with first element [0]
      this.code = propertiesPointsCatch[0].properties.CODE;
      this.vel = propertiesPointsCatch[0].properties.VEL;
      this.coherence = propertiesPointsCatch[0].properties.AUTOCORR; 
    
    
      //Create array with keys first object
      let timeDisplacementKeys = Object.keys(propertiesPointsCatch[0].properties);
      
      //Create array with values first object
      let timeDisplacementValues = Object.values(propertiesPointsCatch[0].properties);
    
      //Delete the first 7 element
      timeDisplacementKeys.splice(0,6);
      timeDisplacementValues.splice(0,6);
    
      //Convert arry of strings to numbers
      const graphicValuesV=timeDisplacementValues.map((i) => Number(i)); 
      
      //change string data to number data
      for (var i = 0; i < graphicValuesV.length; i++) {
        this.verticalValuesGraph.push(parseInt(graphicValuesV[i]));
      }

      for (var i = 0; i <  timeDisplacementKeys.length; i++) {
        var year = timeDisplacementKeys[i].substr(1,[4]);
        var month = timeDisplacementKeys[i].substr(5,[2]);
        var day = timeDisplacementKeys[i].substr(7,[2]);
        //Create array with horizontal values
        this.valuesDataPointDisplacenet.push([new Date(year, month, day), timeDisplacementValues[i]]);
      }

      //change float data to integer data
      function onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
      }

      this.verticalValuesGraph = this.verticalValuesGraph.filter( onlyUnique );

    });
  } 

  //Getters
  getCode() {
    return this.code
  }
  getVel() {
    return this.vel
  } 
  getCoherence() {
    return this.coherence
  } 
  getVerticalValuesGraph() {
    return this.verticalValuesGraph
  } 
  getValuesDataPointDisplacenet() {
    return this.valuesDataPointDisplacenet
  } 

  //Setters
  setCode(code) {
    this.code = code
  }
  setVel(vel) {
    this.vel = vel
  } 
  setCoherence(coherence) {
    this.coherence = coherence
  } 
  setVerticalValuesGraph(verticalValuesGraph) {
    this.verticalValuesGraph = verticalValuesGraph
  } 
  setValuesDataPointDisplacenet(valuesDataPointDisplacenet) {
    this.valuesDataPointDisplacenet = valuesDataPointDisplacenet
  } 

}

export default DisplacementPointValues