
import { ProjectsService } from '../projectsService/projectsService.js'
const projectsService = new ProjectsService()

class ProjectsMenuTest {
  constructor({ container }) {
    this.container = container
    this.openFunction = document.querySelector(".selectOption")
    this.openFunction.addEventListener("click", this.clickMenu.bind(this))
  }

  clickMenu(s) {
    console.log('clickMenu')
  }


  async renderProjectsMenu() {
    const projectsContainer = document.getElementById(this.container)
    projectsContainer.innerHTML = ''
    let ul = document.createElement('ul')
    projectsContainer.append(ul)
    let details = document.createElement('details')
    ul.append(details)
    let summary = document.createElement('summary')
    let summaryText = document.createTextNode('summaryText')
    summary.append(summaryText)
    details.append(summary)
    let li = document.createElement('li')
    let liText = document.createTextNode('liText')
    li.append(liText)
    details.append(li)
    let select = document.createElement('select')
    select.setAttribute('class', 'selectOption')
    li.append(select)

    let optionEmpty = document.createElement('option')
    let optionTextEmpty = document.createTextNode('Select project')
    optionEmpty.append(optionTextEmpty)
    select.append(optionEmpty)

    let option_01 = document.createElement('option')
    let optionText_01 = document.createTextNode('option_01')
    option_01.append(optionText_01)
    select.append(option_01)

    let option_02 = document.createElement('option')
    let optionText_02 = document.createTextNode('option_02')
    option_02.append(optionText_02)
    select.append(option_02)

    let option_03 = document.createElement('option')
    let optionText_03 = document.createTextNode('option_03')
    option_03.append(optionText_03)
    select.append(option_03)

    let option_04 = document.createElement('option')
    let optionText_04 = document.createTextNode('option_04')
    option_04.append(optionText_04)
    select.append(option_04)

    console.log('ProjectsMenuTest')
  }
}


export { ProjectsMenuTest }
