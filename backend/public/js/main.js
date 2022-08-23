/* import "./mapbox.js"  */
import { Mapbox } from './classes/mapbox/mapbox.js'
import "./classes/addProject/addProject.js"
import "./classes/addRaster/addRaster.js"
import "./classes/addvector/addVector.js"
import "./classes/changeBackground/changeBackground.js"
import "./classes/user/user.js"
import "./classes/layersContainer/layersContainer.js"
import "./classes/projectLegends/projectLegends.js"
import { ProjectsMenu } from './classes/projectsMenu/projectsMenu.js'  
//import { CreateArrayProjects } from './classes/createArrayProjects/createArrayProjects.js' 
import "./classes/basicWebComponent/basicWebComponent.js"

//Create menu from dataBase
const projectsMenu = new ProjectsMenu ({container: 'projects_Container'})
projectsMenu.renderProjectsMenu()
//Create menu from dataBase






/* import { BasicClass } from './basicClass.js'
const newClass = new BasicClass ({
  id: '00000000',
  titleProject: 'titleProject',
  dataProject: 'dataProject',
  legend: 'legend'
})

console.log(newClass.id + ' data')
newClass.id = '111111'
console.log(newClass.id + ' data') */

/* 
import { Points } from './classes/points/points.js'
const points = new Points ({
  projectName : "CAT_S1_LOS_A030_202012_202112_Epsg_4326_wgs_84", 
  type : "vector", 
  pathTiles : "http://seinterferdev01:8080/data/CAT_S1_LOS_A030_202012_202112_Epsg_4326_wgs_84-f-pf-pk-o/{z}/{x}/{y}.pbf", 
  minZoom : 0, 
  maxZoom : 14, 
  projectId : "CAT_S1_LOS_A030_202012_202112_Epsg_4326_wgs_84", 
  typeVector : "circle", 
  visibility : "visible", 
  size : 6, 
  valueVelMin : -15,
  valueVelMax : 15
  })

points.renderPoints() */



/* const mapbox = new Mapbox({
  nameIdHtml :  'map',
  style : 'https://geoserveis.icgc.cat/contextmaps/hibrid.json',
  center : [1.3, 41.6],
  maxZoom : 25,
  minZoom : 1.65,
  zoom : 7.7,
}) 
mapbox.createImageMap() */




