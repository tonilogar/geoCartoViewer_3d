
import { ProjectsService } from '../classes/projectsService/projectsService.js'
import { formatData } from '../classes/projectMenu/formatterData.js'
class ProjectsMenuWC extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.showHide = true
    this.container = this.getAttribute('container')
  }
  static get observedAttributes() {
    return ['container'];
  }
  attributeChangedCallback(attr, oldVal, newVal) {
    if (oldVal !== newVal) {
      this[attr] = newVal
    }
  }

  getTemplate() {
    const data = await projectsService.getProjects()
    //console.log(data, 'data')
    const projects = formatData(data)
    //console.log(projects, 'projects')
    const projectsContainer = document.getElementById(this.container)
    projectsContainer.innerHTML = ''
    const template = document.createElement("template")

    template.innerHTML =`
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
          select.setAttribute('class', 'changeProjects')
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
        select.setAttribute('class', 'changeProjects')
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
    `
    return template
  }
  changeElement(s) {
    if (s[s.selectedIndex].value !== 'Select project') {
      console.log(s[s.selectedIndex].value + ' value')// get value
      console.log(s[s.selectedIndex].id + ' id') // get id
      s.value = 'Select project' 
      
      const points = new Points ({
        projectName : "CAT_S1_LOS_A030_202012_202112_Epsg_4326_wgs_84", 
        type : "vector", 
        pathTiles : "http://seinterferdev01:8080/data/CAT_S1_LOS_A030_202012_202112_Epsg_4326_wgs_84-f-pf-pk-o/{z}/{x}/{y}.pbf", 
        minZoom : 0, 
        maxZoom : 14, 
        projectId : "CAT_S1_LOS_A030_202012_202112_Epsg_4326_wgs_84", 
        typeVector : "circle", 
        visibility : "visible", 
        size : 6, 
        valueVelMin : -15,
        valueVelMax : 15
        })
      
      points.renderPoints()  
    }
  }
 
  handleEvent(event) {
    if (event.type === "click")
      this.clickMenu();
  }

  clickMenu() {
    if (this.showHide) {
      document.querySelector(this.container).style.display = 'block'
      this.shadowRoot.querySelector('.open').style.border = '5px solid  var(--colorSoftGreen)'
      this.showHide = false
    }
    else {
      document.querySelector(this.container).style.display = 'none'
      this.shadowRoot.querySelector('.open').style.border = '5px solid var(--colorSoftGrey)'
      this.showHide = true
    }
  }
  getStyles() {
    return /*html */ `
    <style>
      @import './css/style.css';
       .open {
          top: ${this.ptop};
          right: ${this.pright};
          bottom: ${this.pleft};
          left: ${this.pbottom};
        }
      </style>
    `
  }
  render() {
    this.shadowRoot.append(this.getTemplate().content.cloneNode(true))
  }
  connectedCallback() {
    this.render()
    this.open = this.shadowRoot.querySelector(".open")
    this.open.addEventListener("click", this)
  }
}

customElements.define('projects-menu-wc', ProjectsMenuWC)
