//import "./mapbox.js" 
import "./webComponents/basicWebComponent.js"
import "./webComponents/subsidencesProject.js"
import { ProjectsMenu } from './classes/projectsMenu/projectsMenu.js'
import { Points } from './classes/points/points.js'
import { ProjectsService } from './classes/projectsService/projectsService.js'

//Create menu from dataBase
const projectsMenu = new ProjectsMenu()
projectsMenu.renderProjectsMenu()

const projectsService = new ProjectsService()
async  function catchProjects() {
  const pro = await projectsService.getProjects()
  console.log(pro[0].subTitleProject, 'hi pro')
  console.log(pro, 'hi projects')
  return pro
}

catchProjects()

setTimeout(() => {
  document.querySelector('.select').addEventListener("change", (e) => {
  async  function catchProjectById(id) {
    const pro = await projectsService.getProjectsById(id)
    console.log(pro.legend, ' hi legend')

    pro.dataProject.forEach(element => {
      console.log(element, ' element')
      element.forEach(element => {
        console.log(element, ' element_01')
      })
      
    })
    const points = new Points({
      projectName: "CAT_S1_UD_A030D110_201601_202112_Epsg_4326_wgs_84",
      type: "vector",
      pathTiles: "http://seinterferdev01:8080/data/CAT_S1_UD_A030D110_201601_202112_Epsg_4326_wgs_84-f-pf-pk-o/{z}/{x}/{y}.pbf",
      minZoom: 0,
      maxZoom: 14,
      projectId: "CAT_S1_UD_A030D110_201601_202112_Epsg_4326_wgs_84",
      typeVector: "circle",
      visibility: "visible",
      size: 6,
      valueVelMin: -15,
      valueVelMax: 15
    })
    points.renderPoints()
}

catchProjectById('62e50c5747789d530a369a4f')
  })
}, 700) 


 

 


//Redux////////////////////////////////////////////////////////////
//const reducer = (state = [], action) => {
//  console.log("reducer", state, action)
//  if(action.type ==="ADD_USER") {
//    return [...state, action.payload]
//  }
//}
//const store = Redux.createStore(reducer)
//
//// module 1
//store.subscribe(() => {
//  console.log('module 1 subscribe', store.getState())
//})
//
////module 2
////store.dispatch({ type: "ADD_USER", payload: "Jack"})
////store.dispatch({ type: "ADD_USER", payload: "Jon"})
//
//const list = document.querySelector('.list')
//const addUserBtn = document.querySelector('.addUser')
//const userInput = document.querySelector('.userInput')
//
//addUserBtn.addEventListener("click", () => {
//  store.dispatch({ type: "ADD_USER", payload: userInput.value})
//})
//Redux////////////////////////////////////////////////////////////







