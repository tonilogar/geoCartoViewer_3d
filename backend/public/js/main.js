//import "./mapbox.js" Sentinel_2
import "./webComponents/basicWebComponent.js"
import "./webComponents/my-element.js"
import { ProjectsMenu } from './classes/projectsMenu/projectsMenu.js'
import { Points } from './classes/points/points.js'
import { ProjectsService } from './classes/projectsService/projectsService.js'

//Create menu from dataBase
const projectsMenu = new ProjectsMenu()
projectsMenu.renderProjectsMenu()

const component = document.createElement('b-wcomponent')
component.setAttribute('class', 'classComponent')
component.setAttribute('title', 'wcomponent')
component.setAttribute('ptop', '50px')
component.setAttribute('pright', '50px')
component.setAttribute('container', 'background_Container')
document.body.appendChild(component) 




const projectsArray = []
const layersArray = []
const legensArray = []

/* const points1 = new Points({
  projectName: "CAT_PAPIOL_S1_EW_A132D110_02",
  type: "vector",
  pathTiles: "http://seinterferdev01:8080/data/CAT_PAPIOL_S1_EW_A132D110_02/{z}/{x}/{y}.pbf",
  minZoom: 0,
  maxZoom: 14,
  projectId: "CAT_PAPIOL_S1_EW_A132D110_02",
  typeVector: "circle",
  visibility: "visible",
  size: 6,
  valueVelMin: -15,
  valueVelMax: 15
})  */

//points1.renderPoints()

window.onload = () => {
  const projectsService = new ProjectsService()
  const options = document.querySelectorAll('.select')
  console.log(options.length, 'options')
  for (var i = 0; i < options.length; i++) {
    options[i].addEventListener("change", (e) => {
      async function catchProjectById(id) {
        const project = await projectsService.getProjectsById(id)
        console.log(project, ' project')
        console.log(project.titleProject+project.subTitleProject, ' project')
        project.dataProject.forEach(element => {
          console.log(projectsArray, ' projectsArray')
          if (projectsArray.includes(element[0])) {
            console.log('No add element to array')
          }
          else {
            projectsArray.push(element[0])
            console.log('Add element to array')

            const pointcomponent = document.createElement('my-element')
            pointcomponent.setAttribute('projectName', element[0])
            pointcomponent.setAttribute('pathTiles',  element[1])
            pointcomponent.setAttribute('projectId', element[0])
            pointcomponent.setAttribute('visibility', "visible")
            
            document.body.appendChild(pointcomponent)
           
          }

        })
      }
      catchProjectById(projectsMenu.showData())
    })
  }
  
  document.querySelector('.Sentinel_2').style.display = 'none'
  document.querySelector('.Photovoltaic').style.display = 'none'
  document.querySelector('.Solarthermal').style.display = 'none'
  document.querySelector('.Heat_island').style.display = 'none'
  //sentinel_2.disabled = true

} 







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







