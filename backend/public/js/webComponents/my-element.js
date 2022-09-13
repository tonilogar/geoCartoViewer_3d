
import { Points } from '../classes/points/points.js'

class myElement extends HTMLElement {
  constructor() {
    super()
    //this.attachShadow({ mode: "open" })
    this.projectname = this.getAttribute('projectname')
    this.pathtiles = this.getAttribute('pathtiles')
    this.projectid = this.getAttribute('projectid')
    this.visibility = this.getAttribute('visibility')
  }
  static get observedAttributes() {
    return ['projectname', 'pathtiles', 'projectid', 'visibility'];
  }
  attributeChangedCallback(attr, oldVal, newVal) {
    if (oldVal !== newVal) {
      this[attr] = newVal
    }
  }
  connectedCallback() {
    const points1 = new Points({
      projectName: this.projectname,
      type: "vector",
      pathTiles: this.pathtiles,
      minZoom: 0,
      maxZoom: 14,
      projectId: this.projectid,
      typeVector: "circle",
      visibility: this.visibility,
      size: 6,
      valueVelMin: -15,
      valueVelMax: 15
    })  
   map.setLayoutProperty(this.projectname, 'visibility', 'visible') 
    //points1.renderPoints()
    
    
  }
  
  
}
customElements.define("my-element", myElement)
