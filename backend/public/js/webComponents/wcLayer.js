import "./wc-points.js"
class wcLayer extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.layername = this.getAttribute('layername')
    this.infoname = this.getAttribute('infoname')
    this.mbtilesdata = this.getAttribute(['mbtilesdata'])
  }
  static get observedAttributes() {
    return ['layername', 'infoname', ['mbtilesdata']]
  }
  attributeChangedCallback(attr, oldVal, newVal) {
    if (oldVal !== newVal) {
      this[attr] = newVal
    }
  }
  

  removeLayer(s) {
    //Get the mbtilesdata atribute and transform string in array use ',' for cut the string
    const arr = this.mbtilesdata.split(',')
    console.log(arr)
    for (var i = 0; i < arr.length; i++) {
      //only use odd elements
      if (i % 2 == 0) {
        console.log(arr[i], 'element')
        map.setLayoutProperty(arr[i], 'visibility', 'none')
        //this.shadowRoot.querySelector(arr[i]).remove()
      }
    }

    this.shadowRoot.querySelector('.layersWindowDataElement').remove()
    /* this.shadowRoot.querySelector('.layersWindowDataElement') = 'null' */
    console.log(s, ' zzzzzzzzzzzzzzz')
  }
  mainLayer() {
    console.log('main layer')
    this.shadowRoot.querySelector('.legend').remove()
    this.shadowRoot.querySelector('.layersWindowDataElementTitle').style.backgroundColor = 'green'
    const containerL = this.shadowRoot.querySelector('.containerLegends')
    const img = document.createElement('img')
    img.setAttribute('class', 'legend')
    img.setAttribute('src', this.infoname)
    img.setAttribute('alt', 'Project info')
    containerL.appendChild(img)
    
  }

  showHideLayer() {
    console.log('show hide layer')
    if (this.shadowRoot.querySelector('.layersWindowDataElementInput').checked) {
      console.log('check')
      const arr = this.mbtilesdata.split(',')
      console.log(arr)
      for (var i = 0; i < arr.length; i++) {
        //only use odd elements
        if (i % 2 == 0) {
          console.log(arr[i], 'element')
          map.setLayoutProperty(arr[i], 'visibility', 'visible')
          //this.shadowRoot.querySelector(arr[i]).remove()
        }
      }
    }
    else {
      console.log('no check')
      const arr = this.mbtilesdata.split(',')
      console.log(arr)
      for (var i = 0; i < arr.length; i++) {
        //only use odd elements
        if (i % 2 == 0) {
          console.log(arr[i], 'element')
          map.setLayoutProperty(arr[i], 'visibility', 'none')
          //this.shadowRoot.querySelector(arr[i]).remove()
        }
      }
    }

  }
  infoLayer() {
    console.log('info layer')
    this.shadowRoot.querySelector('.containerLegends').style.display = 'block'
  }
  getTemplate() {
    const template = document.createElement('template')
    template.innerHTML = /*html */`
    <div class='layersWindowDataElement' >
      <input  type='checkbox' id='layersWindowDataElementInput' class='layersWindowDataElementInput' checked>
      <div class='layersWindowDataElementTitle' >
        <p>${this.layername}</p>
      </div>
      <div class='layersWindowDataElementClose' >
        <p class='layerClose' >X</p>
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
      .layersWindowDataElementTitle {
          width: 100%;
          height: 20px;
          background-color: grey;
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
      .legend {
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
    /* const pointComponent = document.createElement('wc-points')

    const arr = this.mbtilesdata.split(',')
    console.log(arr, ' array points')
    for (var i = 0; i < arr.length; i++) {
      //only use odd elements
      if (i % 2 == 0) {
        console.log(arr[i], 'add mbtiles body inpar')
        pointComponent.setAttribute('class', arr[i])
        pointComponent.setAttribute('projectName', arr[i])
        pointComponent.setAttribute('projectId', arr[i])
        pointComponent.setAttribute('visibility', "visible")
        //this.shadowRoot.querySelector(arr[i]).remove()
      }
      else {
        console.log(arr[i], 'add mbtiles body par')
        pointComponent.setAttribute('pathTiles', arr[i])
      }
      console.log('add points')
      document.body.appendChild(pointComponent)
    } */

    

    this.shadowRoot.querySelector('.layersWindowDataElementTitle').onclick = () => this.mainLayer()
    this.shadowRoot.querySelector('.layersWindowDataElementClose').onclick = (e) => this.removeLayer(e.target)
    this.shadowRoot.querySelector('.layersWindowDataElementInput').onclick = () => this.showHideLayer()
  }
  disconnectedCallback() {
    this.shadowRoot.querySelector('.layersWindowDataElementTitle').onclick = () => this.mainLayer()
    this.shadowRoot.querySelector('.layersWindowDataElementClose').onclick = (e) => this.removeLayer(e.target)
    this.shadowRoot.querySelector('.layersWindowDataElementInput').onclick = () => this.showHideLayer()
  }

}

customElements.define('wc-layer', wcLayer)
