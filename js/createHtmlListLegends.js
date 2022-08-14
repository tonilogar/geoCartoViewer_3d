    
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

readTextFile("./jsonProjectsFile/projects.json", function (text) {
  const data = JSON.parse(text)
  data.forEach(element => {
    if (element.subtitles) {
      element.subtitles.forEach(element => {
        element.projects.forEach(element => {
          let img = document.createElement('img')
          img.setAttribute('id', element.titleProject)
          img.setAttribute('class', element.titleProject)
          img.setAttribute('alt', element.titleProject)
          img.setAttribute('src', element.legend)
          section_Info_Legend.appendChild(img)
           })
      })
    }
    else {
      if (projects) {
        projects.forEach(element => {
          let img = document.createElement('img')
          img.setAttribute('id', element.titleProject)
          img.setAttribute('class', element.titleProject)
          img.setAttribute('alt', element.titleProject)
          img.setAttribute('src', element.legend)
          section_Info_Legend.appendChild(img)
          })
      }
      else {
        //console.log('There is not subtitles')
      }
    }
  });
});