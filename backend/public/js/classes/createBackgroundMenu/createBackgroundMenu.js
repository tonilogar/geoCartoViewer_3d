import { ProjectsService } from '../projectsService/projectsService.js'


const projectsService = new ProjectsService()

class CreateBackgroundsMenu {
  constructor() {
    this.dataBase
    this.backgroundImage

  }

changeBackground(pathBackground) {
  map.setStyle(pathBackground)
}

  async renderBackgroundMenu() {
    const backgroundContainer = document.querySelector('.background_Container')
    this.dataBase = await projectsService.getBackground()
    this.dataBase.forEach(element => {
      //console.log('elementt ', element)
      const divBackground = document.createElement('div')
      divBackground.setAttribute('class', 'divBackground')
      divBackground.style.borderStyle='ridge'


      const createIdInput = element.tittleBackground.replace(/\s+/g, '')
      const inputBackground = document.createElement('input')
      //inputBackground.setAttribute('class', createClassInput)
      inputBackground.setAttribute('class', 'inputbackground')
      inputBackground.setAttribute('id', createIdInput)
      inputBackground.setAttribute('background', element.backgroundUrl)
      inputBackground.setAttribute('value', element.backgroundUrl)
      //inputBackground.checked = true
      inputBackground.type = 'checkbox'
      inputBackground.style.height = '20px'
      inputBackground.style.width = '20px'
      inputBackground.style.marginTop = '3px'
      divBackground.appendChild(inputBackground)

      const imgBackground = document.createElement('img')
      imgBackground.setAttribute('class', 'imgBackground')
      imgBackground.setAttribute('src', element.exampleImage)
      imgBackground.style.position = 'absolute'
      imgBackground.style.height = '20px'
      imgBackground.style.width = '180px'
      imgBackground.style.marginTop = '3px'
      imgBackground.style.marginLeft = '3px'
      divBackground.appendChild(imgBackground)

      const pBackground = document.createElement('p')
      const pTextBackground = document.createTextNode(element.tittleBackground);
      pBackground.style.margin = '0px'
      pBackground.style.marginLeft = '20px'
      pBackground.appendChild(pTextBackground)
      divBackground.appendChild(pBackground)

      backgroundContainer.appendChild(divBackground)
    });

   /* const mainbackground = document.querySelector('#Hybridorthophotomap')
   mainbackground.checked = true */
  }

}


export { CreateBackgroundsMenu }
