//import "./mapbox.js" 
import "./webComponents/basicWebComponent.js"
import "./webComponents/subsidencesProject.js"
import { ProjectsMenu } from './classes/projectsMenu/projectsMenu.js'



//Create menu from dataBase
const projectsMenu = new ProjectsMenu()
projectsMenu.renderProjectsMenu()


const list = document.querySelector('.list')
const addUserBtn = document.querySelector('.addUser')
const userInput = document.querySelector('.userInput')

setTimeout(() => {
  const changeProject = document.querySelector('.select')
  changeProject.addEventListener("change", (e) => {
  console.log(projectsMenu.showData(), "change")
  })
}, 500)











