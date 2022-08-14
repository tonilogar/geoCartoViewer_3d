import {Map} from './Map'
class ClassAddMbTiles {
  //It's not necessary to declare the variables at the beginning, 
  //it's only to see the code more clearly.
  circleRadius
  //nameAddSource
  //type
  //url
  //minzoom
  //maxzoom
  //id
  //source
  //sourceLayer
  //type
  //visibility
  //circleRadius
  //valueColors
  constructor(circleRadius) {
    this.circleRadius= circleRadius
    

  }
  getCircleRadius() {
    return this.circleRadius
  }
  print() {
    console.log(this.value1 + ' this.value1 ' + this.value2 + ' this.value2')
  }
}

export {ClassAddMbTiles}