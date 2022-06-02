
import { ProjectsService } from '../projectsService/projectsService.js'
const projectsService = new ProjectsService()

class ProjectsMenuTest {
  constructor({ container }) {
    this.container = container
   
  }

  clickMenu(s) {
    
    console.log( s + 'clickMenu')
  }


  async renderProjectsMenu() {

    const projects = await projectsService.getProjects()
    const projectsContainer = document.getElementById(this.container)

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
          let li = document.createElement('li')
          let liText = document.createTextNode(element.title01)
          li.append(liText)
          details.append(li)
          let select = document.createElement('select')
          select.setAttribute('class', 'select')
          /* select.setAttribute('onchange', 'selectOption(this)') */
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
          })
        })
      }
      else {
        let li = document.createElement('li')
        details.append(li)
        let select = document.createElement('select')
        select.setAttribute('class', 'select')
        /* select.setAttribute('onchange', 'selectOption(this)') */
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
          })
        }
        else {
          console.log('There is not projects')
        }
      }
    })
    
    this.open = document.querySelector(".select")
    this.open.addEventListener("change", this.clickMenu.bind(this))


  }
}


export { ProjectsMenuTest }
