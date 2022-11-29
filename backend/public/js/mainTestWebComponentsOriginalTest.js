//import "./mapbox.js" 
/* import './css/index.css'
import './css/chart.css'
import './css/sectionLeft.css'
import './css/sectionTop.css'
import './css/sectionRight.css' 
import './css/sectionCoorZoomDegree.css'  */
import './webComponents/basicWebComponent.js'
import './webComponents/wcLayer.js'
//import "./signals.js" 
import { ProjectsMenu } from './classes/projectsMenu/projectsMenu.js'
import { CreateLayersContainer } from './classes/createLayers/createLayers.js'
import { CreateBackgroundsMenu } from './classes/createBackgroundMenu/createBackgroundMenu.js'


const projectsMenu = new ProjectsMenu()
const createLayersContainer = new CreateLayersContainer()
const createBackgroundsMenu = new CreateBackgroundsMenu()
createBackgroundsMenu.renderBackgroundMenu()





//setTimeout(projectsMenu.renderProjectsMenu(), 3000)
projectsMenu.renderProjectsMenu()
setTimeout(selectProject, 1000)
setTimeout(checkInput, 2000)
function selectProject() {
  const options = document.querySelectorAll('.select')
  for (var i = 0; i < options.length; i++) {
    //console.log('options[i] ', options[i])
    options[i].addEventListener("change", (e) => {
      createLayersContainer.renderLayersContainer(projectsMenu.showData())
    })
  }
}




function checkInput() {
  const backgrounds = document.querySelectorAll('.inputbackground')
  backgrounds.forEach(element => {
    element.addEventListener("change", (e) => {
      if(e.target.checked){
        console.log('is checked ')
        // add the DEM source as a terrain layer with exaggerated height
        map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
        map.setStyle(e.target.value)
        
        
        
        backgrounds.forEach(element => {
          console.log('e.target.id ', element.id)
          document.querySelector('#'+element.id).checked = false
        })
        document.querySelector('#'+element.id).checked = true
        //deseleccionar todos los check
      }
      else{
        console.log('is not checked ')
      }
      
    })
  });
}


/* function checkInput() {
  let selectBackground = document.querySelectorAll('.inputbackground')
  selectBackground.forEach(element => {
    element.addEventListener("change", (e) => {
      console.log('element ', element)
      if(e.target.checked){
        document.querySelector(".inputbackground").checked = false
        console.log('checked ')
        map.setStyle(e.target.value)
    }
    else {
      console.log('no checked ')
    }
    })
  })
} */



//map.setStyle('mapbox://styles/mapbox/satellite-v9')
//map.setStyle('http://betaserver.icgc.cat/vectortiles/estils/niceredtopo.json')
//map.setStyle('http://betaserver.icgc.cat/vectortiles/estils/bt5mbase_pla.json')
//map.setStyle('http://betaserver.icgc.cat/vectortiles/estils/redtopoestil.json')
//map.setStyle('http://betaserver.icgc.cat/vectortiles/estils/bt5m_nice.json')
//map.setStyle('http://betaserver.icgc.cat/vectortiles/estils/altimbt5m.json')



/* window.onload = () => {

  
  
}
 */
