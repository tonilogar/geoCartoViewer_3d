//import "./mapbox.js" 
import "./webComponents/basicWebComponent.js"
import "./webComponents/basicWebComponentTest.js"
import "./webComponents/wc-points.js"
import "./webComponents/wcLayer.js"
//import "./signals.js" 
import { ProjectsMenu } from './classes/projectsMenu/projectsMenu.js'
import { ProjectsService } from './classes/projectsService/projectsService.js'

//Create menu from dataBase
const projectsMenu = new ProjectsMenu()
projectsMenu.renderProjectsMenu()




const wcLayersArray = []


window.onload = () => {
  
  let createClass
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
          
          
          
          // replace() usando una expresión Regex para reemplazar espacios en blanco
          createClass = layerName.replace(/\s+/g, '')  // > "Textodeejemplo"

          console.log(createClass, ' createClass')
          console.log(wcLayersArray, ' wcLayersArray')

          const nameLayerDiv='layer'+ layerName 
          const layerComponent = document.createElement('div')
          layerComponent.style.height='25px'
          layerComponent.style.width='350px'
          layerComponent.style.display='flex'
          layerComponent.style.borderStyle='ridge'
          layerComponent.style.borderBottom='none'
          layerComponent.setAttribute('iddatabase', id)
          layerComponent.setAttribute('layername', layerName)
          layerComponent.setAttribute('infoname', project.legend)
          layerComponent.setAttribute('mbtilesdata', project.dataProject)
          layerComponent.setAttribute('class', createClass)
          layerComponent.setAttribute('id', layerName)
          layersWindowData.appendChild(layerComponent)

          const layersWindowDataElementInput = document.createElement('input')
          layersWindowDataElementInput.setAttribute('class', 'inputLayer')
          layersWindowDataElementInput.checked = true
          layersWindowDataElementInput.type='checkbox'
          layersWindowDataElementInput.style.height='20px'
          layersWindowDataElementInput.style.width='20px'
          layersWindowDataElementInput.style.marginTop='3px'
          layerComponent.appendChild(layersWindowDataElementInput)


          
          const layersWindowDataElementTitle = document.createElement('div')
          layersWindowDataElementTitle.style.height='25px'
          layersWindowDataElementTitle.style.width='100%'
          layersWindowDataElementTitle.style.display='flex'
          layersWindowDataElementTitle.style.borderStyle='ridge'
          layersWindowDataElementTitle.style.flexWrap='wrap'

          const layersWindowDataElementTitleP = document.createElement('p')
          const pText = document.createTextNode(layerName);
          layersWindowDataElementTitleP.setAttribute('class', 'tittleLayer')
          layersWindowDataElementTitle.appendChild(layersWindowDataElementTitleP)
          layersWindowDataElementTitleP.appendChild(pText)
          layerComponent.appendChild(layersWindowDataElementTitle)



          const layersWindowDataElementClose = document.createElement('div')
          
          layersWindowDataElementClose.style.height='20px'
          layersWindowDataElementClose.style.width='20px'
          layersWindowDataElementClose.style.backgroundColor='rgb(255, 214, 0)'
          
          const layersWindowDataElementCloseP = document.createElement('p')
          const pTextClose = document.createTextNode('X');
          layersWindowDataElementCloseP.setAttribute('class', 'closeLayer')
          layersWindowDataElementCloseP.style.marginTop='3px'
          layersWindowDataElementCloseP.style.marginLeft='4px'
          layersWindowDataElementCloseP.appendChild(pTextClose)
          layersWindowDataElementClose.appendChild(layersWindowDataElementCloseP)
          
          layerComponent.appendChild(layersWindowDataElementClose)
          

          const containerLegends=document.querySelector('.containerLegends')
          const legend = document.createElement('img')
          legend.setAttribute('class', 'imgLegend')
          legend.setAttribute('src', project.legend)
          legend.style.position='absolute'
          legend.style.width='100%'
          legend.style.backgroundColor='rgb(255, 214, 0)'
          containerLegends.appendChild(legend)


          document.querySelector('.containerLegends').style.display = "block"
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
      let classd = '.'+ createClass
      document.addEventListener('click', (e) => {
        console.log('Clic en ', e.target)
        /* if (e.target.matches('.closeLayer')) {
         //console.log('borrar layer', classd )
         //document.querySelector(classd).remove()
         wcLayersArray.forEach(element => {
          console.log(element, ' element ')
         })
        } */
      })
    })
   
  }

  document.querySelector('.button1').disabled = true

  document.querySelector('.Sentinel_2').style.display = 'none'
  document.querySelector('.Photovoltaic').style.display = 'none'
  document.querySelector('.Solarthermal').style.display = 'none'
  document.querySelector('.Heat_island').style.display = 'none'

  
}

