import { ProjectsService } from '../projectsService/projectsService.js'
const projectsService = new ProjectsService()

import { Project } from './project.js'


class CreateArrayProjects {
  constructor() {
    console.log('class createArrayProjects')
    this.arrayProjects 
    this.arrayProjects_01 
    
  }

  async showData() {
    this.arrayProjects_01 = ["subsidencies", "lidar"]
    this.arrayProjects_01.push("farmstar")
    return this.arrayProjects_01
  }

  async createArrayProjects() {
    const projects = await projectsService.getProjects()
    projects.forEach(element => {
      /* console.log(element.title + ' element.title') */
      if (element.subtitles) {
        element.subtitles.forEach(element => {
          /* console.log(element.title01 + ' element.title01 with subtitles') */
          element.projects.forEach(element => {
            const project = new Project({
              id: element.id,
              titleProject: element.titleProject,
              dataProject: element.dataProject,
              legend: element.legend
            })
            //this.arrayProjects.push(project)
              console.log(project.id + '   ' +
              project.titleProject + '   ' +
              project.dataProject + '   ' +
              project.legend + '   ' +
              ' with sub') 
          })
        })
      }
      else {
        if (element.projects) {
          element.projects.forEach(element => {
            const project = new Project({
              id: element.id,
              titleProject: element.titleProject,
              dataProject: element.dataProject,
              legend: element.legend
            })
              //this.arrayProjects.push(project)
              console.log(project.id + '   ' +
              project.titleProject + '   ' +
              project.dataProject + '   ' +
              project.legend + '   ' +
              ' without sub') 
          })
        }
      }
    })
    //console.log(this.arrayProjects.length + ' this.arrayProjects.length()')
    return this.arrayProjects
  }
}

export { CreateArrayProjects }