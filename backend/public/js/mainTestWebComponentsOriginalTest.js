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


const projectsMenu = new ProjectsMenu()
const createLayersContainer = new CreateLayersContainer()





//setTimeout(projectsMenu.renderProjectsMenu(), 3000)
projectsMenu.renderProjectsMenu()
setTimeout(selectProject, 1000)
function selectProject(){
  const options = document.querySelectorAll('.select')
  for (var i = 0; i < options.length; i++) {
    options[i].addEventListener("change", (e) => {
      createLayersContainer.renderLayersContainer(projectsMenu.showData())
    })
  }
}
//map.setStyle('mapbox://styles/mapbox/satellite-v9')
//map.setStyle('http://betaserver.icgc.cat/vectortiles/estils/niceredtopo.json')
//map.setStyle('http://betaserver.icgc.cat/vectortiles/estils/bt5mbase_pla.json')
//map.setStyle('http://betaserver.icgc.cat/vectortiles/estils/redtopoestil.json')
//map.setStyle('http://betaserver.icgc.cat/vectortiles/estils/bt5m_nice.json')
//map.setStyle('http://betaserver.icgc.cat/vectortiles/estils/altimbt5m.json')
//map.setStyle('https://geoserveis.icgc.cat/contextmaps/icgc_geologic_riscos.json')


/* window.onload = () => {

  
  
}
 */
