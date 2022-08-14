function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest()
  rawFile.overrideMimeType("application/json")
  rawFile.open("GET", file, true)
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText)
    }
  }
  rawFile.send(null)
}

readTextFile("./jsonProjectsFile/projectsTest.json", function (text) {
  const data = JSON.parse(text)
  data.forEach(element => {

    let ul = document.createElement('ul')
    section_Tools_Container.appendChild(ul)

    let details = document.createElement('details')
    ul.appendChild(details)

    let summary = document.createElement('summary')
    let summaryText = document.createTextNode(element.title)
    summary.appendChild(summaryText)
    details.appendChild(summary)

    //console.log(element.title, ' title')

    if (element.subtitles) {
      element.subtitles.forEach(element => {
        let li = document.createElement('li')
        let liText = document.createTextNode(element.title01);
        li.appendChild(liText)

        let input = document.createElement('input')
        input.setAttribute('list', element.title01)
        input.setAttribute('placeholder', 'Select option')
        input.setAttribute('onchange', 'selectOption(this)')
        li.appendChild(input)

        let dataList = document.createElement('datalist')
        dataList.setAttribute('id', element.title01)
        li.appendChild(dataList)
        details.appendChild(li);
        //console.log('_', element.title01, ' title01 into subtitles')

        element.projects.forEach(element => {
          let option = document.createElement('option')
          option.setAttribute('id', element.id)
          input.setAttribute('title', element.id)
          option.setAttribute('value', element.titleProject)
          dataList.appendChild(option)
          //console.log('__', element.titleProject, ' title01 into subtitles0000')
        })
      })
    }
    else {
      let input = document.createElement('input')
      input.setAttribute('list', element.title)
      input.setAttribute('onchange', 'selectOption(this)')
      input.setAttribute('placeholder', 'Select option')
      details.appendChild(input)

      let dataList = document.createElement('datalist')
      dataList.setAttribute('id', element.title)
      details.appendChild(dataList)
      let projects = element.projects

      if (projects) {
        projects.forEach(element => {
          let option = document.createElement('option')
          option.setAttribute('id', element.id)
          input.setAttribute('title', element.id)
          option.setAttribute('value', element.titleProject)
          dataList.appendChild(option)
          //console.log('__', element.titleProject, ' title01 into subtitles777777777777')
        })
      }
      else {
        //console.log('There is not subtitles')
      }
    }
  });
});