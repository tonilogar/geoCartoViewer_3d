/* import "./mapbox.js"  */
import "./webComponents/basicWebComponent.js"
import "./webComponents/subsidencesProject.js"
import { ProjectsMenu } from './classes/projectsMenu/projectsMenu.js'  


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

 
/* import { Points } from './classes/points/points.js'
let points = new Points ({
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

points.renderPoints()  */



 






