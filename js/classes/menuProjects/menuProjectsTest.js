class MenuProjects {
  constructor(_jsonProjectsFile) {
    console.log('menuProjects')
    this.jsonProjectsFile = _jsonProjectsFile
  }
  createListMenuTools() {
    this.jsonProjectsFile.forEach(element => {

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
          console.log(element.title01)
          let li = document.createElement('li')
          let liText = document.createTextNode(element.title01)
          li.appendChild(liText)
          details.appendChild(li)
          let select = document.createElement('select')
          select.setAttribute('onchange', 'selectOption(this)')
          li.appendChild(select)
          element.projects.forEach(element => {
            let option = document.createElement('option')
            let optionText = document.createTextNode(element.titleProject)
            option.appendChild(optionText)
            option.setAttribute('id', element.id)
            option.setAttribute('value', element.titleProject)
            select.appendChild(option)
            //console.log('__', element.titleProject, ' title01 into subtitles0000')
          })
        })
      }
      else {
        console.log('There is not subtitles')
        let li = document.createElement('li')
        let liText = document.createTextNode(element.title)
        li.appendChild(liText)
        details.appendChild(li)
        let select = document.createElement('select')
        select.setAttribute('onchange', 'selectOption(this)')
        li.appendChild(select)
        element.projects.forEach(element => {
          let option = document.createElement('option')
          let optionText = document.createTextNode(element.titleProject)
          option.appendChild(optionText)
          option.setAttribute('id', element.id)
          option.setAttribute('value', element.titleProject)
          select.appendChild(option)
          //console.log('__', element.titleProject, ' title01 into subtitles0000')
        })
      }
    })
  }

}
export { MenuProjects }