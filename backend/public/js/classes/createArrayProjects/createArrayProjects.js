import { ProjectsService } from '../projectsService/projectsService.js'
const projectsService = new ProjectsService()

import { Project } from './project.js'


class CreateArrayProjects {
  constructor() {
    console.log('class createArrayProjects')
    this.arrayProjects 
    this.arrayProjects_01 
    
  }

  showData() {
    this.arrayProjects_01 = ["subsidencies", "lidar"]
    this.arrayProjects_01.push("farmstar")
    return this.arrayProjects_01
  }

  cArrayProjects() {
    var projects
    //const projects = await projectsService.getProjects()
    /* console.log(projects +' projects') */
   /*  projects.forEach(element => {
      console.log('hi')
    }) */
    projectsService.getProjects().then(pas => {projects})
    return projects

  }
}

export { CreateArrayProjects }