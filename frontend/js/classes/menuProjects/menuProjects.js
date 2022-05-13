import { ProjectsService } from '../projectsService/projectsService'
const projectsService = new ProjectsService()

class MenuProjects {
  async renderMenuProjects() {
    const projects = await projectsService.getProjects()
    const projectsContainer = document.getElementById('section_Tools_Container')
    projectsContainer.innerHTML = ''
    projects.forEach(element => {

      let ul = document.createElement('ul')
      section_Tools_Container.appendChild(ul)
      let details = document.createElement('details')
      ul.appendChild(details)

      let summary = document.createElement('summary')
      let summaryText = document.createTextNode(element.title)
      summary.appendChild(summaryText)
      details.appendChild(summary)
      if (element.subtitles) {
        element.subtitles.forEach(element => {
          /*  console.log(element.title01) */
          let li = document.createElement('li')
          let liText = document.createTextNode(element.title01)
          li.appendChild(liText)
          details.appendChild(li)
          let select = document.createElement('select')
          select.setAttribute('onchange', 'selectOption(this)')
          li.appendChild(select)
          let optionEmpty = document.createElement('option')
          let optionTextEmpty = document.createTextNode('Select project')
          optionEmpty.appendChild(optionTextEmpty)
          select.appendChild(optionEmpty)
          element.projects.forEach(element => {
            let option = document.createElement('option')
            let optionText = document.createTextNode(element.titleProject)
            option.appendChild(optionText)
            option.setAttribute('id', element.id)
            option.setAttribute('value', element.titleProject)
            select.appendChild(option)
          })
        })
      }
      else {
        console.log('There is not subtitles')
        let li = document.createElement('li')
        /* let liText = document.createTextNode(element.title)
        li.appendChild(liText) */
        details.appendChild(li)
        let select = document.createElement('select')
        select.setAttribute('onchange', 'selectOption(this)')
        li.appendChild(select)
        let optionEmpty = document.createElement('option')
        let optionTextEmpty = document.createTextNode('Select project')
        optionEmpty.appendChild(optionTextEmpty)
        select.appendChild(optionEmpty)
        if (element.projects) {
          element.projects.forEach(element => {
            let option = document.createElement('option')
            let optionText = document.createTextNode(element.titleProject)
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
  deleteElement() {

  }
  clearElement(idElement) {
    document.getElementById(idElement).reset()

  }
}


export { MenuProjects }
