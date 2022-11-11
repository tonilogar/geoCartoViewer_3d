

export let arrayIdProjectDelete = []
export let arrayMainLayerProject = []
class wcLayer extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.layername = this.getAttribute('layername')
    this.infoname = this.getAttribute('infoname')
    this.mbtilesdata = this.getAttribute('mbtilesdata')
    this.iddatabase = this.getAttribute('iddatabase')
    this.layerNameTrim

  }
  static get observedAttributes() {
    return ['layername', 'infoname', 'mbtilesdata', 'iddatabase']
  }
  attributeChangedCallback(attr, oldVal, newVal) {
    if (oldVal !== newVal) {
      this[attr] = newVal
    }
  }

  /* paintMainLayer() {
    console.log('into paintMainLayer ')
    arrayMainLayerProject.forEach(element => {
      console.log('element ', element)
      const el = this.shadowRoot.querySelector('.'+element)
      console.log('el ', el)
      this.shadowRoot.querySelector('.'+element).style.backgroundColor = 'red'
       })
    
  } */

  removeLayer(s) {
    //Get the mbtilesdata atribute and transform string in array use ',' for cut the string
    //console.log('this.iddatabase', this.iddatabase)
    const arr = this.mbtilesdata.split(',')
    //console.log(arr)
    for (var i = 0; i < arr.length; i++) {
      if (i % 2 == 0) {
        //console.log(arr[i], 'element')
        map.removeLayer(arr[i])
        map.removeSource(arr[i])
      }
    }
    document.body.querySelector('.wc-points').remove()
    this.shadowRoot.querySelector('.layersWindowDataElement').remove()
    document.body.querySelector('.layer' + this.layerNameTrim).remove()
    let filteredwcLayersArray = []

    if (arrayIdProjectDelete.includes(this.iddatabase)) {
      //if this.iddatabase is into thearrayIdProjectDelete delete this.iddatabase into the array
      filteredwcLayersArray = arrayIdProjectDelete.filter((item) => item !== this.iddatabase)
      arrayIdProjectDelete = filteredwcLayersArray
    }
    console.log('arrayMainLayerProject ', arrayMainLayerProject, 'this.layerNameTrim ', this.layerNameTrim)
    let filteredwcLayersArrayMain = []
    filteredwcLayersArrayMain = arrayMainLayerProject.filter((item) => item !== this.layerNameTrim)
    arrayMainLayerProject = filteredwcLayersArrayMain
    console.log('arrayMainLayerProject ', arrayMainLayerProject, 'this.layerNameTrim ', this.layerNameTrim)


  }
  mainLayer(s) {
    //map.setLayoutProperty(arr[i], 'visibility', 'none')
    if (document.body.querySelector('.layer' + this.layerNameTrim).style.backgroundColor == 'rgba(255, 255, 255, 0)') {
      arrayMainLayerProject.forEach(element => {
        document.body.querySelector('.layer' + element).style.backgroundColor = 'rgba(255, 255, 255, 0)'
      })
      document.body.querySelector('.layer' + this.layerNameTrim).style.backgroundColor = 'green'
      console.log('paso a verde')
      const arr = this.mbtilesdata.split(',')
      for (var i = 0; i < arr.length; i++) {
        //only use odd elements
        if (i % 2 == 0) {
          //console.log(arr[i], 'element')
          map.setPaintProperty(arr[i],    'circle-color', [
            "case",
            ["<", ["get", "VEL"], -15], "rgba(226,26,28, 1)",
            [">=", ["get", "VEL"], -15] && ["<=", ["get", "VEL"], -12], "rgba(239,117,16, 1)",
            [">=", ["get", "VEL"], -12] && ["<=", ["get", "VEL"], -9], "rgba(250,209,5, 1)",
            [">=", ["get", "VEL"], -9] && ["<=", ["get", "VEL"], -6], "rgba(255,243,24, 1)",
            [">=", ["get", "VEL"], -6] && ["<=", ["get", "VEL"], -3], "rgba(174,255,0, 1)",
            /* [">=", ["get", "VEL"], -3]  && ["<=", ["get", "VEL"], 3], "rgba(4,255,0, 1)", */
            [">=", ["get", "VEL"], 3] && ["<=", ["get", "VEL"], 6], "rgba(2,255,130, 1)",
            [">=", ["get", "VEL"], 6] && ["<=", ["get", "VEL"], 9], "rgba(1,255,203, 1)",
            [">=", ["get", "VEL"], 9] && ["<=", ["get", "VEL"], 12], "rgba(1,210,251, 1)",
            [">=", ["get", "VEL"], 12] && ["<=", ["get", "VEL"], 15], "rgba(0,121,246, 1)",
            [">", ["get", "VEL"], 15], "rgba(1,32,244, 1)",
            "rgba(4,255,0, 1)" //Range between -3 y 3 
        ])
          map.setPaintProperty(arr[i],    'circle-radius', 6)
        }
      }
    }
    else {
      document.body.querySelector('.layer' + this.layerNameTrim).style.backgroundColor = 'rgba(255, 255, 255, 0)'
      console.log('paso a gris')
      const arr = this.mbtilesdata.split(',')
      for (var i = 0; i < arr.length; i++) {
        //only use odd elements
        if (i % 2 == 0) {
          //console.log(arr[i], 'element')
          map.setPaintProperty(arr[i],    'circle-color', 'rgba(255, 157, 157, 0.39)')
          map.setPaintProperty(arr[i],    'circle-radius', 3)
        }
      }
    }
    console.log('this.layerNameTrim ', this.layerNameTrim)
    
    
  }

  showHideLayer() {
    //console.log('show hide layer')
    if (this.shadowRoot.querySelector('.layersWindowDataElementInput').checked) {
      //console.log('check')
      const arr = this.mbtilesdata.split(',')
      //console.log(arr)
      for (var i = 0; i < arr.length; i++) {
        //only use odd elements
        if (i % 2 == 0) {
          //console.log(arr[i], 'element')
          map.setLayoutProperty(arr[i], 'visibility', 'visible')
          console.log('arr[i]', arr[i])
          this.shadowRoot.querySelector('.legend').style.display = "block"
          //this.shadowRoot.querySelector(arr[i]).remove()
        }
      }
    }
    else {
      //console.log('no check')
      const arr = this.mbtilesdata.split(',')
      // console.log(arr)
      for (var i = 0; i < arr.length; i++) {
        //only use odd elements
        if (i % 2 == 0) {
          //console.log(arr[i], 'element')
          map.setLayoutProperty(arr[i], 'visibility', 'none')
          this.shadowRoot.querySelector('.legend').style.display = "none"
          //this.shadowRoot.querySelector(arr[i]).remove()
        }
      }
    }

  }

  getTemplate() {
    this.layerNameTrim = this.layername.replace(/\s+/g, '')

    const template = document.createElement('template')
    template.innerHTML = /*html */`
    <div class='layersWindowDataElement' >
      <input  type='checkbox' id='layersWindowDataElementInput' class='layersWindowDataElementInput' checked>
      <div class='${this.layerNameTrim}' id='layersWindowDataElementTitle'> 
        <p class='${this.layername}'>${this.layername}</p>
      </div>
      <div class='layersWindowDataElementClose' >
        <p layerc='layerc' class='layerClose' >X</p>
    </div>
    <div class='containerLegends'>
      <img class='legend' src='${this.infoname}' alt="Project info"></div>
    </div>
    
      ${this.getStyles()}
    `
    return template
  }

  getStyles() {
    return /*html */ `
    <style>
      p, input {
        padding: 0px;
        margin: 0px;
      }
      p {
        font: message-box;
        font-size: 14px;
        cursor: pointer;
      }
      
      .layersWindowDataElement {
        display: flex;
        height: 25px;
        border-style: ridge;
        border-bottom: none;
      }
      
      .layersWindowDataElementInfo:hover {
        background-color: red;
        cursor: pointer;
      }
      .layersWindowDataElementInput {
        width: 20px;
        height: 20px;
        margin-top: 3px;
      }
      #layersWindowDataElementTitle {
          width: 100%;
          height: 20px;
          border-style: ridge;
          flex-wrap: wrap;
        }

        .layersWindowDataElementClose {
          width: 20px;
          height: 20px;
          background-color: rgb(255, 214, 0);
          margin-top: 2px;
        }
          .layersWindowDataElementClose p {
            margin-top: 2px;
            margin-left: 3px;
          }
      .containerLegends {
        position: absolute;
        right: 0px;
        top: 100%;
        background-color: white;
        display: block;
        border-style: ridge;
      }
      .containerLegends img {
        width: 350px;
      }       
      </style>
    `
  }
  render() {
    this.shadowRoot.append(this.getTemplate().content.cloneNode(true))
  }
  connectedCallback() {


    this.render()
    //this.paintMainLayer()
    this.shadowRoot.querySelector('.' + this.layerNameTrim).onclick = (e) => this.mainLayer()
    this.shadowRoot.querySelector('.layersWindowDataElementClose').onclick = (e) => this.removeLayer()
    this.shadowRoot.querySelector('.layersWindowDataElementInput').onclick = () => this.showHideLayer()
    /* this.shadowRoot.querySelector(".layersWindowDataElementClose").addEventListener("click", this) */
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('.' + this.layerNameTrim).onclick = (e) => this.mainLayer(e.target)
    this.shadowRoot.querySelector('.layersWindowDataElementClose').onclick = (e) => this.removeLayer(e.target)
    this.shadowRoot.querySelector('.layersWindowDataElementInput').onclick = () => this.showHideLayer()
  }

}

customElements.define('wc-layer', wcLayer)
