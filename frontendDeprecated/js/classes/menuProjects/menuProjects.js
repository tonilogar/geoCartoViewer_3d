import { ProjectsService } from '../projectsService/projectsService'
const projectsService = new ProjectsService()

class MenuProjects {
  async renderMenuProjects() {
    const projects = await projectsService.getProjects()
    const projectsContainer = document.getElementById('section_Tools_Container')
    projectsContainer.innerHTML = ''
    projects.forEach(element => {

      const ul = document.createElement('ul')
      section_Tools_Container.appendChild(ul)
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
          select.setAttribute('onchange', 'selectOption(this)')
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
        select.setAttribute('onchange', 'selectOption(this)')
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
  deconsteElement() {

  }
  clearElement(idElement) {
    document.getElementById(idElement).reset()

  }
}


export { MenuProjects }
