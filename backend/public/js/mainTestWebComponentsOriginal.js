//import "./mapbox.js" 
import "./webComponents/basicWebComponent.js"
import "./webComponents/basicWebComponentTest.js"
import "./webComponents/wc-points.js"
import "./webComponents/wcLayer.js"
//import "./signals.js" 
import { ProjectsMenu } from './classes/projectsMenu/projectsMenu.js'
import { ProjectsService } from './classes/projectsService/projectsService.js'


/* let classNameTest = 'Catalonia 2021 LOS Ascending'
let arrayData01 = [['1', '2'], ['3', '4'], ['5', '6']]
arrayData01.forEach(element => {
  console.log(element, 'arrayData01')
  element.forEach(element => {
    console.log(element, 'arrayData01')
  });
});
console.log(arrayData01, 'arrayData01')
let arrayData = ["Saab", "Volvo", "BMW"]
const basciComponentTest = document.createElement('b-wcomponent-test')
basciComponentTest.setAttribute('img', "./images/addProject.svg")
basciComponentTest.setAttribute('ptop', "100px")
basciComponentTest.setAttribute('pleft', "100px")
basciComponentTest.setAttribute('layername', 'Catalonia 2021 LOS Ascending')
basciComponentTest.setAttribute('infoname', './images/Llegenda_ASC_15.jpg')
basciComponentTest.setAttribute('arraydata', arrayData01)
basciComponentTest.setAttribute('class', classNameTest)
document.body.appendChild(basciComponentTest) */
//Create menu from dataBase
const projectsMenu = new ProjectsMenu()
projectsMenu.renderProjectsMenu()




const wcLayersArray = []


window.onload = () => {
  

  const projectsService = new ProjectsService()
  const options = document.querySelectorAll('.select')
  //console.log(options.length, 'options')
  for (var i = 0; i < options.length; i++) {
    //console.log(options[i], ' options[i]')
    options[i].addEventListener("change", (e) => {
      async function catchProjectById(id) {
        console.log('idDataBase ', id)
        const project = await projectsService.getProjectsById(id)
        //Add layer to arrayLayers
        const layerName = project.titleProject + ' ' + project.subTitleProject
        if (wcLayersArray.includes(id)) {
          console.log('No add layer to array')
        }
        else {
          const layersWindowData = document.querySelector('.layersWindowData')
          wcLayersArray.push(id)
          console.log(layerName, 'Add layer to array')
          console.log(wcLayersArray, ' wcLayersArray')
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

      
    })

  }

  function flujoEventos(e) {
    console.log('Hola te saluda ', this.className, ' El click lo origino el evento ', e.target.className)
  }

  const divEventosFlujo = document.querySelectorAll('wc-layer')
  console.log('divEventosFlujo', divEventosFlujo)
  
  divEventosFlujo.forEach(div => {
    div.addEventListener("click", flujoEventos,true)
  })

  document.addEventListener('click', (e) => {
    console.log('Clic en ', e.target)
    if (e.target.matches('wc-layer')) {
      console.log('hi')
      //document.querySelector(classd).remove()

    }
  }) 

  
}

