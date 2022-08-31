//import "./mapbox.js" 
import "./webComponents/basicWebComponent.js"
import "./webComponents/subsidencesProject.js"
import { ProjectsMenu } from './classes/projectsMenu/projectsMenu.js'  


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
const projectsMenu = new ProjectsMenu ()
projectsMenu.renderProjectsMenu()
console.log(projectsMenu.dataBase, ' dataBasePepe')
//projectsMenu.sendSignal()
//Create menu from dataBase




import { formatData } from './classes/projectsMenu/formatterData.js'

  const projects = fetch(`http://localhost:4000/api/projects/`)
 
  console.log(projects, ' dataBasePepe')

