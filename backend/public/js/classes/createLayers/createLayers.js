import { ProjectsService } from '../projectsService/projectsService.js'
import { arrayIdProjectDelete, arrayMainLayerProject } from '../../webComponents/wcLayer.js'
import '../../webComponents/wc-points.js'
const projectsService = new ProjectsService()


class CreateLayersContainer {
  constructor() {
  }

  addLayerArray(id) {
    arrayIdProjectDelete.push(id)
  }
  addMainLayerArray(lName) {
    arrayMainLayerProject.push(lName)
  }

  
  async renderLayersContainer(id) {
    const project = await projectsService.getProjectsById(id)
    //Add layer to arrayLayers
    const layerName = project.titleProject + ' ' + project.subTitleProject
    const _layerName = layerName.replace(/\s+/g, '')
    if (arrayIdProjectDelete.includes(id)) {
      console.log('No add layer to array')
    }
    else {
      const layersWindowData = document.querySelector('.layersWindowData')
      this.addLayerArray(id)
      this.addMainLayerArray(_layerName)
      console.log('arrayMainLayerProject ', arrayMainLayerProject, '_layerName ', _layerName)

      const containerWcLayer = document.createElement('div')
      containerWcLayer.setAttribute('class', 'layer'+_layerName)
      containerWcLayer.style.backgroundColor = 'rgba(255, 255, 255, 0)'
      containerWcLayer.style.margin = "2px"
      const layerComponent = document.createElement('wc-layer')
      layerComponent.setAttribute('iddatabase', id)
      layerComponent.setAttribute('layername', layerName)
      layerComponent.setAttribute('infoname', project.legend)
      layerComponent.setAttribute('mbtilesdata', project.dataProject)
      layerComponent.setAttribute('class', 'wc-layer')
      layerComponent.setAttribute('id', id)
      //layerComponent.style.backgroundColor='green'
      containerWcLayer.appendChild(layerComponent)
      layersWindowData.appendChild(containerWcLayer)
      document.querySelector('.layers_Container').style.display = "block"
      document.querySelector('.layersWindowData').style.display = "block"
      arrayMainLayerProject.forEach(element => {
        document.body.querySelector('.layer'+element).style.backgroundColor = 'rgba(255, 255, 255, 0)'
      })
      containerWcLayer.style.backgroundColor = "green"


      const createDiv = document.createElement('div')
      createDiv.setAttribute('class', 'div-Delete')
      document.body.appendChild(createDiv)

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
