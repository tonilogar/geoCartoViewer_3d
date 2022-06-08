import { ProjectsService } from '../projectsService/projectsService.js'
const projectsService = new ProjectsService()

class ArrayProjects {
  constructor() {
    this.arrayProjects

  }
  async createArrayProjects() {
    const projects = await projectsService.getProjects()
    projects.forEach(element => {
      console(element + ' element')
    })

  }
}

export default ArrayProjects;