import { Project } from "./project.js"

class ContainerProjects {
  constructor(arrayProjectsIn) {
    this.arrayProjectsIn = arrayProjectsIn
    this.arrayProjectsOut = []
    

    this.arrayProjectsIn.forEach((element) => {
      //console.log(element.title + " title ")
      if (element.subtitles) {
        element.subtitles.forEach((element) => {
          element.projects.forEach((element) => {
            const project = new Project({
              id: element.id,
              titleProject: element.titleProject,
              dataProject: element.dataProject,
              legend: element.legend,
            })
            //console.log(element.id + " element.id ")
            //console.log(element.titleProject + " element.titleProject ")
            //console.log(element.dataProject + " element.dataProject ")
            //console.log(element.legend + " element.legend ")
            this.arrayProjectsOut.push(project)
          })
        })
      } else {
        if (element.projects) {
          element.projects.forEach((element) => {
            const project = new Project({
              id: element.id,
              titleProject: element.titleProject,
              dataProject: element.dataProject,
              legend: element.legend,
            })
            //console.log(element.id + " element.id ")
            //console.log(element.titleProject + " element.titleProject ")
            //console.log(element.dataProject + " element.dataProject ")
            //console.log(element.legend + " element.legend ")
            this.arrayProjectsOut.push(project)
          })
        } else {
          //console.log(" There is not project ")
        }
      }
    })
  }



}
export { ContainerProjects }


