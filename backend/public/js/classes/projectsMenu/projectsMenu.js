import { ProjectsService } from '../projectsService/projectsService.js'
const projectsService = new ProjectsService()

class ProjectsMenu {
  constructor({container}) {
    this.container = container
  }
  
  clickMenu() {
    console.log('clickMenu ')
  }


async renderProjectsMenu() {
    const projects = await projectsService.getProjects()
    const projectsContainer = document.getElementById(this.container)
    projectsContainer.innerHTML = '' 
    projects.forEach(element => {

      let ul = document.createElement('ul')
      projectsContainer.append(ul)
      let details = document.createElement('details')
      ul.append(details)

      let summary = document.createElement('summary')
      let summaryText = document.createTextNode(element.title)
      summary.append(summaryText)
      details.append(summary)
      if (element.subtitles) {
        element.subtitles.forEach(element => {
          /*  console.log(element.title01) */
          let li = document.createElement('li')
          let liText = document.createTextNode(element.title01)
          li.append(liText)
          details.append(li)
          let select = document.createElement('select')
          select.setAttribute('onchange', 'selectOption(this)')
          li.append(select)
          let optionEmpty = document.createElement('option')
          let optionTextEmpty = document.createTextNode('Select project')
          optionEmpty.append(optionTextEmpty)
          select.append(optionEmpty)
          element.projects.forEach(element => {
            let option = document.createElement('option')
            let optionText = document.createTextNode(element.titleProject)
            option.append(optionText)
            option.setAttribute('id', element.id)
            option.setAttribute('value', element.titleProject)
            select.append(option)
            /* console.log('id ' + element.id)
            console.log('titleProject ' + element.titleProject)
            console.log('legend ' + element.legend)
            console.log('dataProject ' + element.dataProject) */
            /* console.log(option.id + 'className') */
          })
        })
      }
      else {
        //console.log('There is not subtitles')
        let li = document.createElement('li')
        details.append(li)
        let select = document.createElement('select')
        select.setAttribute('onchange', 'selectOption(this)')
        li.append(select)
        let optionEmpty = document.createElement('option')
        let optionTextEmpty = document.createTextNode('Select project')
        optionEmpty.append(optionTextEmpty)
        select.append(optionEmpty)
        if (element.projects) {
          element.projects.forEach(element => {
            let option = document.createElement('option')
            let optionText = document.createTextNode(element.titleProject)
            option.append(optionText)
            option.setAttribute('id', element.id)
            option.setAttribute('value', element.titleProject)
            select.append(option)
           /*  console.log('id ' + element.id)
            console.log('titleProject ' + element.titleProject)
            console.log('legend ' + element.legend)
            console.log('dataProject ' + element.dataProject) */
           /*  console.log(option.id + 'className') */
          })
        }
        else {
         /*  console.log('There is not projects') */
        }
      }
    })

  }

  async renderProjectsMenu() {
    const projects = await projectsService.getProjects()
    const projectsContainer = document.getElementById(this.container)
    projectsContainer.innerHTML = '' 
    projects.forEach(element => {

      let ul = document.createElement('ul')
      projectsContainer.append(ul)
      let details = document.createElement('details')
      ul.append(details)

      let summary = document.createElement('summary')
      let summaryText = document.createTextNode(element.title)
      summary.append(summaryText)
      details.append(summary)
      if (element.subtitles) {
        element.subtitles.forEach(element => {
          /*  console.log(element.title01) */
          let li = document.createElement('li')
          let liText = document.createTextNode(element.title01)
          li.append(liText)
          details.append(li)
          let select = document.createElement('select')
          select.setAttribute('onchange', 'selectOption(this)')
          li.append(select)
          let optionEmpty = document.createElement('option')
          let optionTextEmpty = document.createTextNode('Select project')
          optionEmpty.append(optionTextEmpty)
          select.append(optionEmpty)
          element.projects.forEach(element => {
            let option = document.createElement('option')
            let optionText = document.createTextNode(element.titleProject)
            option.append(optionText)
            option.setAttribute('id', element.id)
            option.setAttribute('value', element.titleProject)
            select.append(option)
            /* console.log('id ' + element.id)
            console.log('titleProject ' + element.titleProject)
            console.log('legend ' + element.legend)
            console.log('dataProject ' + element.dataProject) */
            /* console.log(option.id + 'className') */
          })
        })
      }
      else {
        //console.log('There is not subtitles')
        let li = document.createElement('li')
        details.append(li)
        let select = document.createElement('select')
        select.setAttribute('onchange', 'selectOption(this)')
        li.append(select)
        let optionEmpty = document.createElement('option')
        let optionTextEmpty = document.createTextNode('Select project')
        optionEmpty.append(optionTextEmpty)
        select.append(optionEmpty)
        if (element.projects) {
          element.projects.forEach(element => {
            let option = document.createElement('option')
            let optionText = document.createTextNode(element.titleProject)
            option.append(optionText)
            option.setAttribute('id', element.id)
            option.setAttribute('value', element.titleProject)
            select.append(option)
           /*  console.log('id ' + element.id)
            console.log('titleProject ' + element.titleProject)
            console.log('legend ' + element.legend)
            console.log('dataProject ' + element.dataProject) */
           /*  console.log(option.id + 'className') */
          })
        }
        else {
         /*  console.log('There is not projects') */
        }
      }
    })

  }
}


export { ProjectsMenu }
