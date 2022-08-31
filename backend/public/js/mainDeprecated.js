//import "./mapbox.js" 
import "./webComponents/basicWebComponent.js"
import "./webComponents/subsidencesProject.js"
import { ProjectsMenu } from './classes/projectsMenu/projectsMenu.js'  
import { Points } from './classes/points/points.js'

/* import { configureStore } from 'redux' */
const reducer = (state = [], action) => {
  console.log("reducer", state, action)
  if(action.type ==="ADD_USER") {
    return [...state, action.payload]
  }
}
const store = Redux.createStore(reducer)

// module 1
store.subscribe(() => {
  console.log('module 1 subscribe', store.getState())
})

//module 2
//store.dispatch({ type: "ADD_USER", payload: "Jack"})
//store.dispatch({ type: "ADD_USER", payload: "Jon"})

const list = document.querySelector('.list')
const addUserBtn = document.querySelector('.addUser')
const userInput = document.querySelector('.userInput')

addUserBtn.addEventListener("click", () => {
  store.dispatch({ type: "ADD_USER", payload: userInput.value})
})



//Create menu from dataBase
const projectsMenu = new ProjectsMenu ({container: 'projects_Container'})
projectsMenu.renderProjectsMenu()
console.log(projectsMenu.dataBase, ' dataBasePepe')
//projectsMenu.sendSignal()
//Create menu from dataBase

const changeProject = document.querySelector('.addUser')

changeProject.addEventListener("click", (e) => {
  console.log(e, "click")
}) 



import { ProjectsService } from './classes/projectsService/projectsService.js'

const projectsService = new ProjectsService()
console.log(projectsService.getProjects() , 'getProjects')
console.log(projectsService.getProjectsById('62e50c5747789d530a369a4f') , 'getProjectsById')



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

 

 /* const points = new Points ({
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

points.renderPoints()   */
/*
points.hidePoints()
points = null
console.log(points) */







