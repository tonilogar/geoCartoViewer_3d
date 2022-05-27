/* import "./mapbox.js"  */
import "./classes/addProject/addProject.js"
import "./classes/addRaster/addRaster.js"
import "./classes/addvector/addVector.js"
import "./classes/changeBackground/changeBackground.js"
import "./classes/user/user.js"
import "./classes/layersContainer/layersContainer.js"
import "./classes/projectLegends/projectLegends.js"
import { Mapbox } from './classes/mapbox/mapbox.js'


const mapbox = new Mapbox({
  nameIdHtml :  'map',
  style : 'https://geoserveis.icgc.cat/contextmaps/hibrid.json',
  center : [1.3, 41.6],
  maxZoom : 25,
  minZoom : 1.65,
  zoom : 7.7,
}) 
mapbox.createImageMap()





 


