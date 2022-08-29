import { ProjectsService } from '../projectsService/projectsService.js'
import { formatData } from './formatterData.js'
//import {changeElement} from './signal.js'
const projectsService = new ProjectsService()


class ProjectsMenu {
  constructor({ container }) {
    this.container = container
  }

  changeElement(s) {
    if (s[s.selectedIndex].value !== 'Select project') {
      console.log(s[s.selectedIndex].value + ' value')// get value
      console.log(s[s.selectedIndex].id + ' id') // get id
      s.value = 'Select project' 
    }
  }
  
  async renderProjectsMenu() {
    const data = await projectsService.getProjects()
    //console.log(data, 'data')
    const projects = formatData(data)
    //console.log(projects, 'projects')
    const projectsContainer = document.getElementById(this.container)
    projectsContainer.innerHTML = ''
    projects.forEach(element => {

      const ul = document.createElement('ul')
      projectsContainer.appendChild(ul)
      const details = document.createElement('details')
      ul.appendChild(details)

      const summary = document.createElement('summary')
      const summaryText = document.createTextNode(element.title)
      summary.appendChild(summaryText)
      details.appendChild(summary)
      if (element.subtitles) {
        element.subtitles.forEach(element => {
          /*  console.log(element.title01) */
          const li = document.createElement('li')
          const liText = document.createTextNode(element.title01)
          li.appendChild(liText)
          details.appendChild(li)
          const select = document.createElement('select')
          //select.setAttribute('onchange', 'selectOption(this)')
          //select.addEventListener("change", (e)=>changeElement(e.target))//Alex's code import function from outside the class
          select.addEventListener("change", (e)=>this.changeElement(e.target))
          li.appendChild(select)
          const optionEmpty = document.createElement('option')
          const optionTextEmpty = document.createTextNode('Select project')
          optionEmpty.appendChild(optionTextEmpty)
          select.appendChild(optionEmpty)
          element.projects.forEach(element => {
            const option = document.createElement('option')
            const optionText = document.createTextNode(element.titleProject)
            option.appendChild(optionText)
            option.setAttribute('id', element.id)
            option.setAttribute('value', element.titleProject)
            select.appendChild(option)
          })
        })
      }
      else {
        console.log('There is not subtitles')
        const li = document.createElement('li')
        /* const liText = document.createTextNode(element.title)
        li.appendChild(liText) */
        details.appendChild(li)
        const select = document.createElement('select')
        //select.setAttribute('onchange', 'selectOption(this)')
        //select.addEventListener("change", (e)=>changeElement(e.target))//Alex's code import function from outside the class
        select.addEventListener("change", (e)=>this.changeElement(e.target))//call function into the class
        li.appendChild(select)
        const optionEmpty = document.createElement('option')
        const optionTextEmpty = document.createTextNode('Select project')
        optionEmpty.appendChild(optionTextEmpty)
        select.appendChild(optionEmpty)
        if (element.projects) {
          element.projects.forEach(element => {
            const option = document.createElement('option')
            const optionText = document.createTextNode(element.titleProject)
            option.appendChild(optionText)
            option.setAttribute('id', element.id)
            option.setAttribute('value', element.titleProject)
            select.appendChild(option)
          })
        }
        else {
          console.log('There is not projects')
        }
      }
    })
    return projects
  }
  
}


export { ProjectsMenu }
