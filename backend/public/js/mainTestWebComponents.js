//import "./mapbox.js" 
import "./webComponents/basicWebComponent.js"
import "./webComponents/basicWebComponentTest.js"
import "./webComponents/wc-points.js"
import "./webComponents/wcLayer.js"
import { ProjectsMenu } from './classes/projectsMenu/projectsMenu.js'
import { ProjectsService } from './classes/projectsService/projectsService.js'

let classNameTest='Catalonia 2021 LOS Ascending'
let arrayData=["Saab", "Volvo", "BMW"]
const basciComponentTest = document.createElement('b-wcomponent-test')
basciComponentTest.setAttribute('img', "./images/addProject.svg")
basciComponentTest.setAttribute('ptop', "100px")
basciComponentTest.setAttribute('pleft', "100px")
basciComponentTest.setAttribute('layername', 'Catalonia 2021 LOS Ascending')
basciComponentTest.setAttribute('infoname', './images/Llegenda_ASC_15.jpg')
basciComponentTest.setAttribute('arraydata', arrayData)
basciComponentTest.setAttribute('class', classNameTest)
document.body.appendChild(basciComponentTest)
//Create menu from dataBase
const projectsMenu = new ProjectsMenu()
projectsMenu.renderProjectsMenu()




const projectsArray = []
const layersArray = []
const legendsArray = []




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
        const infoName = project.legend 
        const mbtilesData = project.dataProject
        project.dataProject.forEach(element => {
          console.log(element[0], 'element')
        });
        if (layersArray.includes(layerName)) {
          console.log('No add layer to array')
        }
        else {
          const layersWindowData = document.querySelector('.layersWindowData')
          layersArray.push(layerName)
          console.log(layerName, 'Add layer to array')
          console.log(infoName, 'infoName')
          console.log(mbtilesData , 'mbtilesData')
          const layerComponent = document.createElement('wc-layer')
          layerComponent.setAttribute('layername', layerName)
          layerComponent.setAttribute('infoname', infoName)
          layerComponent.setAttribute(['mbtilesdata'], mbtilesData)
          layerComponent.setAttribute('class', layerName)
          layersWindowData.appendChild(layerComponent)
          document.querySelector('.layers_Container').style.display = "block"
          document.querySelector('.layersWindowData').style.display = "block"
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
            const pointComponent = document.createElement('wc-points')
            pointComponent.setAttribute('class', element[0])
            pointComponent.setAttribute('projectName', element[0])
            pointComponent.setAttribute('pathTiles', element[1])
            pointComponent.setAttribute('projectId', element[0])
            pointComponent.setAttribute('visibility', "visible")

            document.body.appendChild(pointComponent)
          
            projectsArray.push(element[0])
            console.log('element[0] ',element[0], 'element[1]' , element[1] )
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

