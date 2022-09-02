import { ProjectsService } from '../projectsService/projectsService.js'
import { formatData } from './formatterData.js'
//import {changeElement} from './signal.js'
import { Points } from '../../classes/points/points.js'
const projectsService = new ProjectsService()


class ProjectsMenu {
  constructor() {
    this.dataBase
    this.signal
    
  }

  changeElement(s) {
    if (s[s.selectedIndex].value !== 'Select project') {
      console.log(s[s.selectedIndex].value + ' value')// get value
      console.log(s[s.selectedIndex].id + ' id') // get id
      this.signal= s[s.selectedIndex].id
      s.value = 'Select project' 
    }
  }
 
  showData() {
    return this.signal
  }
  async renderProjectsMenu() {
    this.dataBase = await projectsService.getProjects()
    //console.log(data, 'data')
    const projects = formatData(this.dataBase)
    //console.log(projects, 'projects')
    const projectsContainer = document.getElementById('projects_Container')
    projectsContainer.innerHTML = ''
    /* const boton = document.createElement('button')
    boton.setAttribute('class', 'boton')
    projectsContainer.appendChild(boton) */
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
          select.setAttribute('class', 'select')
          select.addEventListener("change", (e)=>this.changeElement(e.target))
          li.appendChild(select)
          const optionEmpty = document.createElement('option')
          const optionTextEmpty = document.createTextNode('Select project')
          optionEmpty.appendChild(optionTextEmpty)
          select.appendChild(optionEmpty)
          element.projects.forEach(element => {
            const option = document.createElement('option')
            const optionText = document.createTextNode(element.titleProject)
            option.setAttribute('class', 'option')
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
        select.setAttribute('class', 'select')
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
            option.setAttribute('class', 'option')
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
    //return projects
    
  }
}


export { ProjectsMenu }
