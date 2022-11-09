import { ProjectsService } from '../projectsService/projectsService.js'
import { idProjectDelete, arrayIdProjectDelete } from '../../webComponents/wcLayer.js'
import '../../webComponents/wc-points.js'
const projectsService = new ProjectsService()


class CreateLayersContainer {
  constructor() { 
  }

  addLayerArray(id) {
    arrayIdProjectDelete.push(id)
  }

  
  async renderLayersContainer(id) {
    const project = await projectsService.getProjectsById(id)
    //Add layer to arrayLayers
    const layerName = project.titleProject + ' ' + project.subTitleProject
    const _layerName= layerName.replace(/\s+/g, '')
    if (arrayIdProjectDelete.includes(id)) {
      console.log('No add layer to array')
    }
    else {
      const layersWindowData = document.querySelector('.layersWindowData')
      this.addLayerArray(id)
      const layerComponent = document.createElement('wc-layer')
      layerComponent.setAttribute('iddatabase', id)
      layerComponent.setAttribute('layername', layerName)
      layerComponent.setAttribute('infoname', project.legend)
      layerComponent.setAttribute('mbtilesdata', project.dataProject)
      layerComponent.setAttribute('class', _layerName)
      layerComponent.setAttribute('id', id)
      layersWindowData.appendChild(layerComponent)
      document.querySelector('.layers_Container').style.display = "block"
      document.querySelector('.layersWindowData').style.display = "block"

      project.dataProject.forEach(element => {
        //Add points///////////////////////////////////////////////
        const pointComponent = document.createElement('wc-points')
        pointComponent.setAttribute('class', 'wc-points')
        pointComponent.setAttribute('projectName', element[0])
        pointComponent.setAttribute('pathTiles', element[1])
        pointComponent.setAttribute('projectId', element[0])
        pointComponent.setAttribute('visibility', "visible")
        document.body.appendChild(pointComponent)

        //Add points/////////////////////////////////////////
      })
      
    }
    
  }

}


export { CreateLayersContainer }
