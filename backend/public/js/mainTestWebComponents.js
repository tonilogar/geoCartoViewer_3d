//import "./mapbox.js" 
import "./webComponents/basicWebComponent.js"
import "./webComponents/wc-points.js"
import "./webComponents/wcLayer.js"
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

/* const component1 = document.createElement('my-element')
          component1.setAttribute('class', 'layerName')
          component1.setAttribute('title', 'layerName')
          component1.setAttribute('color', 'red')
          document.body.appendChild(component1) */


window.onload = () => {
  const projectsService = new ProjectsService()
  const options = document.querySelectorAll('.select')
  //console.log(options.length, 'options')
  for (var i = 0; i < options.length; i++) {
    options[i].addEventListener("change", (e) => {
      async function catchProjectById(id) {
        const project = await projectsService.getProjectsById(id)
        //Add layer to arrayLayers
        const layerName = project.titleProject + ' ' + project.subTitleProject
        if (layersArray.includes(layerName)) {
          console.log('No add layer to array')
        }
        else {
          const data = document.querySelector('.layersWindowData')
          layersArray.push(layerName)
          console.log(layerName, 'Add layer to array')
          const component = document.createElement('wc-layer')
          component.setAttribute('pepe', 'layerName')
          component.setAttribute('title', layerName)
          data.appendChild(component)
        }
        //Add layer to arrayLayers
        //console.log(project.titleProject+project.subTitleProject, ' project')
        project.dataProject.forEach(element => {
          //console.log(projectsArray, ' projectsArray')
          if (projectsArray.includes(element[0])) {
            console.log('No add element to array')
          }
          else {
            console.log('Add element to array')
            //Add points///////////////////////////////////////////////
            const pointcomponent = document.createElement('wc-points')
            pointcomponent.setAttribute('projectName', element[0])
            pointcomponent.setAttribute('pathTiles', element[1])
            pointcomponent.setAttribute('projectId', element[0])
            pointcomponent.setAttribute('visibility', "visible")

            document.body.appendChild(pointcomponent)
          
            projectsArray.push(element[0])
            //Add points/////////////////////////////////////////



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


}

