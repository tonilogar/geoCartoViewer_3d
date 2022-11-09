//import "./mapbox.js" 
import './webComponents/basicWebComponent.js'
import './webComponents/basicWebComponentTest.js'
import './webComponents/wc-points.js'
import './webComponents/wcLayer.js'
//import "./signals.js" 
import { ProjectsMenu } from './classes/projectsMenu/projectsMenu.js'
import { ProjectsService } from './classes/projectsService/projectsService.js'
import { idProjectDelete } from './webComponents/wcLayer.js'


const projectsMenu = new ProjectsMenu()
projectsMenu.renderProjectsMenu()





window.onload = () => {
  console.log('init aplication')
  let wcLayersArray = []
  console.log('wcLayersArray Init aplication', wcLayersArray)
  //console.log( ' idProjectDelete', idProjectDelete)
  const projectsService = new ProjectsService()
  const options = document.querySelectorAll('.select')
  //console.log(options.length, 'options')
  for (var i = 0; i < options.length; i++) {
    //console.log(options[i], ' options[i]')
    options[i].addEventListener("change", (e) => {
      console.log('before catchProjectById(id)', wcLayersArray)
      async function catchProjectById(id) {
        //console.log('idDataBase ', id)
        const project = await projectsService.getProjectsById(id)
        //Add layer to arrayLayers
        const layerName = project.titleProject + ' ' + project.subTitleProject

        if (wcLayersArray.includes(id)) {
          console.log('No add layer to array')
        }
        else {
          const layersWindowData = document.querySelector('.layersWindowData')
          wcLayersArray.push(id)
          //console.log(layerName, 'Add layer to array')
          //console.log(wcLayersArray, ' wcLayersArray')
          const layerComponent = document.createElement('wc-layer')
          layerComponent.setAttribute('iddatabase', id)
          layerComponent.setAttribute('layername', layerName)
          layerComponent.setAttribute('infoname', project.legend)
          layerComponent.setAttribute('mbtilesdata', project.dataProject)
          layerComponent.setAttribute('class', layerName)
          layerComponent.setAttribute('id', layerName)
          layersWindowData.appendChild(layerComponent)
          document.querySelector('.layers_Container').style.display = "block"
          document.querySelector('.layersWindowData').style.display = "block"

          project.dataProject.forEach(element => {
            //Add points///////////////////////////////////////////////
            const pointComponent = document.createElement('wc-points')
            pointComponent.setAttribute('class', element[0])
            pointComponent.setAttribute('projectName', element[0])
            pointComponent.setAttribute('pathTiles', element[1])
            pointComponent.setAttribute('projectId', element[0])
            pointComponent.setAttribute('visibility', "visible")
            document.body.appendChild(pointComponent)

            //console.log('element[0] ', element[0], 'element[1]', element[1])
            //Add points/////////////////////////////////////////
          })

        }

      }

      catchProjectById(projectsMenu.showData())

      console.log(' wcLayersArray antes ', wcLayersArray)
      let filteredwcLayersArray = []
      if (wcLayersArray.includes(idProjectDelete)) {
        filteredwcLayersArray = wcLayersArray.filter((item) => item !== idProjectDelete)
        console.log('delete id')
        wcLayersArray = filteredwcLayersArray
      }

      console.log(' wcLayersArray despues ', wcLayersArray)
      console.log(' filteredwcLayersArray despues ', filteredwcLayersArray)

    })

  }



  /*  document.addEventListener('click', (e) => {
     console.log('Clic en ', e.target)
     if (e.target.matches('wc-layer')) {
       console.log('hi')
       //document.querySelector(classd).remove()
 
     }
   })  */


}

