import { ProjectsService } from '../projectsService/projectsService.js'
const projectsService = new ProjectsService()

class ProjectsMenu {
  constructor({ container }) {
    this.container = container
    this.arrayProjectType = []
    this.arrayTitleProject = []
    this.arraySubTitleProject = []
  }

  clickMenu() {
    console.log('clickMenu ')
  }
  async renderProjectsMenu_01() {
    const projects = await projectsService.getProjects()
    const projectsContainer = document.getElementById(this.container)
    projectsContainer.innerHTML = ''
    projects.forEach(element => {
      this.arrayProjectType.push(element.projectType)
      const arrayProjectType_01 = new Set(this.arrayProjectType)
      this.arrayProjectType = [...arrayProjectType_01]

      this.arrayTitleProject.push(element.titleProject)
      const arrayTitleProject_01 = new Set(this.arrayTitleProject)
      this.arrayTitleProject = [...arrayTitleProject_01]

      this.arraySubTitleProject.push([element.projectType, element.titleProject, element.subTitleProject, element._id])
      const arraySubTitleProject_01 = new Set(this.arraySubTitleProject)
      this.arraySubTitleProject = [...arraySubTitleProject_01]
    })



   
    
    console.log(this.arrayProjectType, ' this.arrayProjectType')
    console.log(this.arrayTitleProject, ' this.arrayTitleProject')
    console.log(this.arraySubTitleProject, 'arraySubTitleProject')

  }
  async renderProjectsMenu() {
    const projects = await projectsService.getProjects()
    const projectsContainer = document.getElementById(this.container)
    projectsContainer.innerHTML = ''
    projects.forEach(element => {
      this.arrayProjectType.push(element.projectType)
      const arrayProjectType_01 = new Set(this.arrayProjectType)
      this.arrayProjectType = [...arrayProjectType_01]

     


      this.arrayTitleProject.push(element.titleProject)
      const arrayTitleProject_01 = new Set(this.arrayTitleProject)
      this.arrayTitleProject = [...arrayTitleProject_01]

      this.arraySubTitleProject.push([element.projectType, element.titleProject, element.subTitleProject, element._id])
      const arraySubTitleProject_01 = new Set(this.arraySubTitleProject)
      this.arraySubTitleProject = [...arraySubTitleProject_01]

      /* console.log(element._id , 'id')
      console.log(element.projectType , 'id')
      console.log(element.dataProject , 'element') */
    })



    const arraySubsidences = ['catalunya 2021', 'catalunya 2016-2021', 'conca', 'paiol']
    this.arrayProjectType.forEach(element => {
      let ul = document.createElement('ul')
      projectsContainer.append(ul)
      let details = document.createElement('details')
      ul.append(details)
      let summary = document.createElement('summary')
      let summaryText = document.createTextNode(element)
      //let sumaryTextString = element
      summary.append(summaryText)
      details.append(summary)

      arraySubsidences.forEach(element => {
        let li = document.createElement('li')
        let liText = document.createTextNode(element)
        li.append(liText)
        details.append(li)
        let select = document.createElement('select')
        select.setAttribute('onchange', 'selectOption(this)')
        //por cada elemento dentro del array de subsidences crear un li
        li.append(select)
        let optionEmpty = document.createElement('option')
        let optionTextEmpty = document.createTextNode('Select project')
        optionEmpty.append(optionTextEmpty)
        select.append(optionEmpty)
      })


    })
    console.log(this.arrayProjectType, ' this.arrayProjectType')
    console.log(this.arrayTitleProject, ' this.arrayTitleProject')
    console.log(this.arraySubTitleProject, 'arraySubTitleProject')

  }
}


export { ProjectsMenu }
