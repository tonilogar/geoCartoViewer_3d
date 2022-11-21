import { ProjectsService } from '../projectsService/projectsService.js'


const projectsService = new ProjectsService()

class CreateBackgroundsMenu {
  constructor() {
    this.dataBase
    
  }

  

  
  async renderBackgroundMenu() {
    this.dataBase = await projectsService.getBackground()
    this.dataBase.forEach(element => {
      console.log('elelemt ', element)
      
    });
    

  }

}


export { CreateBackgroundsMenu }
