/* import "./mapbox.js"  */
import { Mapbox } from './classes/mapbox/mapbox.js'
import "./classes/addProject/addProject.js"
import "./classes/addRaster/addRaster.js"
import "./classes/addvector/addVector.js"
import "./classes/changeBackground/changeBackground.js"
import "./classes/user/user.js"
import "./classes/layersContainer/layersContainer.js"
import "./classes/projectLegends/projectLegends.js"
import { ProjectsMenu } from     './classes/projectsMenu/projectsMenu.js' 
import { ArrayProjects } from     './classes/createArrayProjects/createArrayProjects.js' 
/* import { ProjectsMenuTest } from     './classes/projectsMenu/projectsMenuTest.js'
const projectsMenuTest = new ProjectsMenuTest ({container: 'projects_ContainerTest'}) */

import { Points } from './classes/points/points.js'

const projectsMenu = new ProjectsMenu ({container: 'projects_Container'})
projectsMenu.renderProjectsMenu() 


const arrayProjects = new ArrayProjects ()



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

points.renderPoints()



/* const mapbox = new Mapbox({
  nameIdHtml :  'map',
  style : 'https://geoserveis.icgc.cat/contextmaps/hibrid.json',
  center : [1.3, 41.6],
  maxZoom : 25,
  minZoom : 1.65,
  zoom : 7.7,
}) 
mapbox.createImageMap() */





 


