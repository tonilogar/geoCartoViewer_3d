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


setTimeout(() => {
  var matches = document.querySelectorAll('.select');
    console.log(matches, ' matches')
  document.querySelector('.select').addEventListener("change", (e) => {
    console.log(e, ' event')
    console.log(projectsMenu.showData(), "change")//ident number
    async function catchProjectById(id) {
      const project = await projectsService.getProjectsById(id)
      //console.log(pro.dataProject[1][0], ' data Project idProject')
      //console.log(pro.dataProject[1][1], ' data Project pathMbTiles')

      project.dataProject.forEach(element => {
        console.log(element[0], ' element')
        const points = new Points({
          projectName: element[0],
          type: "vector",
          pathTiles: element[1],
          minZoom: 0,
          maxZoom: 14,
          projectId: element[0],
          typeVector: "circle",
          visibility: "visible",
          size: 6,
          valueVelMin: -15,
          valueVelMax: 15
        })
        points.renderPoints()
      }) 
    }
    catchProjectById(projectsMenu.showData())
  })
}, 1000)


const points = new Points({
  projectName: "CAT_S1_LOS_A030_201601_202112_Epsg_4326_wgs_84",
  type: "vector",
  pathTiles: "http://seinterferdev01:8080/data/CAT_S1_LOS_A030_201601_202112_Epsg_4326_wgs_84-f-pf-pk-o/{z}/{x}/{y}.pbf",
  minZoom: 0,
  maxZoom: 14,
  projectId: "CAT_S1_LOS_A030_201601_202112_Epsg_4326_wgs_84",
  typeVector: "circle",
  visibility: "visible",
  size: 6,
  valueVelMin: -15,
  valueVelMax: 15
})
const points1 = new Points({
  projectName: "CAT_S1_LOS_A132_201601_202112_Epsg_4326_wgs_84",
  type: "vector",
  pathTiles: "http://seinterferdev01:8080/data/CAT_S1_LOS_A132_201601_202112_Epsg_4326_wgs_84-f-pf-pk-o/{z}/{x}/{y}.pbf",
  minZoom: 0,
  maxZoom: 14,
  projectId: "CAT_S1_LOS_A132_201601_202112_Epsg_4326_wgs_84",
  typeVector: "circle",
  visibility: "visible",
  size: 6,
  valueVelMin: -15,
  valueVelMax: 15
})

//points.renderPoints()
//points1.renderPoints()





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







