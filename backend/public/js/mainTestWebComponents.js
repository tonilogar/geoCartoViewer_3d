//import "./mapbox.js" 
import "./webComponents/basicWebComponent.js"
import "./webComponents/my-element.js"

import { ProjectsMenu } from './classes/projectsMenu/projectsMenu.js'
import { ProjectsService } from './classes/projectsService/projectsService.js'


/* const component1 = document.createElement('test-wc')
            component1.setAttribute('class', 'className')
            component1.setAttribute('title', 'testWC')
            component1.setAttribute('ptop', '750px')
            component1.setAttribute('pleft', '750px')
            component1.setAttribute('bcolor', 'red')
            component1.setAttribute('container', '.test_Container')
            document.body.appendChild(component1) */

//Create menu from dataBase
const projectsMenu = new ProjectsMenu()
projectsMenu.renderProjectsMenu()




const projectsArray = []
const layersArray = []
const legensArray = []



window.onload = () => {
  const projectsService = new ProjectsService()
  const options = document.querySelectorAll('.select')
  //console.log(options.length, 'options')
  for (var i = 0; i < options.length; i++) {
    options[i].addEventListener("change", (e) => {
      async function catchProjectById(id) {
        const project = await projectsService.getProjectsById(id)
        //console.log(project, ' project')
        //console.log(project.titleProject+project.subTitleProject, ' project')
        project.dataProject.forEach(element => {
          //console.log(projectsArray, ' projectsArray')
          if (projectsArray.includes(element[0])) {
            console.log('No add element to array')
          }
          else {
            projectsArray.push(element[0])
            console.log(element[0], 'Add element to array')
            const component = document.createElement('my-element')
            component.setAttribute('class', element[0])
            component.setAttribute('title', element[0])
            component.setAttribute('color', 'red')
            document.body.appendChild(component)
            
          }

        })
      }
      catchProjectById(projectsMenu.showData())
    })
  }
  
  /* document.querySelector('.Sentinel_2').style.display = 'none'
  document.querySelector('.Photovoltaic').style.display = 'none'
  document.querySelector('.Solarthermal').style.display = 'none'
  document.querySelector('.Heat_island').style.display = 'none' */
  

}

