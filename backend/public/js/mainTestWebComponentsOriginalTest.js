//import "./mapbox.js" 
import './webComponents/basicWebComponent.js'
import './webComponents/wcLayer.js'
//import "./signals.js" 
import { ProjectsMenu } from './classes/projectsMenu/projectsMenu.js'
import { CreateLayersContainer } from './classes/createLayers/createLayers.js'


const projectsMenu = new ProjectsMenu()
projectsMenu.renderProjectsMenu()

const createLayersContainer = new CreateLayersContainer()






window.onload = () => {

  const options = document.querySelectorAll('.select')
  for (var i = 0; i < options.length; i++) {
    options[i].addEventListener("change", (e) => {
      console.log('Select project ')
      createLayersContainer.renderLayersContainer(projectsMenu.showData())
      console.log('createLayersContainer.wcLayersArray ', createLayersContainer.wcLayersArray)
      
    })
    
  }
  
  
}

