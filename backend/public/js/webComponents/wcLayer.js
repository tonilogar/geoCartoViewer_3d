
class wcLayer extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.layername = this.getAttribute('layername')
    this.infoname = this.getAttribute('infoname')
    console.log( this.layername,  'this.layername')
    console.log(this.infoname, 'this.infoname')
  }
  static get observedAttributes() {
    return ['layername', 'infoname'];
  }
  attributeChangedCallback(attr, oldVal, newVal) {
    if (oldVal !== newVal) {
      this[attr] = newVal
    }
  }
  mainLayer() {
    console.log('main layer')
    this.shadowRoot.querySelector('.layersWindowDataElementTitle').style.backgroundColor = 'green'
  }

  removeLayer() {
    console.log('remove layer')
    this.shadowRoot.querySelector('.layersWindowDataElement').remove()
    this.shadowRoot.querySelector('.layersWindowDataElement') = 'null'
  }

  showHideLayer() {
    console.log('show hide layer')
    if (this.shadowRoot.querySelector('.layersWindowDataElementInput').checked) {
      console.log('check')
    }
    else {
      console.log('no check')
    }

  }
  infoLayer() {
    console.log('info layer')
    this.shadowRoot.querySelector('.containerLegends').style.display = 'block'
  }
  getTemplate() {
    const template = document.createElement('template')
    template.innerHTML = /*html */`
    <div class='layersWindowDataElement'>
      <input  type='checkbox' id='layersWindowDataElementInput' class='layersWindowDataElementInput' checked>
      <div class='layersWindowDataElementTitle' >
        <p>${this.layername}</p>
      </div>
      <div class='layersWindowDataElementClose' >
        <p>X</p>
    </div>
    <div class='containerLegends'>
      <img class='legend' src='${this.layername}' alt="Project info"></div>
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
        height: 30px;
       
        border-style: ridge;
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
          margin-top: 3px;
        }
          .layersWindowDataElementClose p {
            margin-top: 2px;
            margin-left: 3px;
          }
      .containerLegends {
        position: absolute;
        right: 0px;
        top: 600px;
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
    this.layerName = this.shadowRoot.querySelector('.layersWindowDataElementTitle')
    this.layerName.onclick = () => this.mainLayer()

    this.layerRemove = this.shadowRoot.querySelector('.layersWindowDataElementClose')
    this.layerRemove.onclick = () => this.removeLayer()

    this.layershowHide = this.shadowRoot.querySelector('.layersWindowDataElementInput')
    this.layershowHide.onclick = () => this.showHideLayer()
  }
  disconnectedCallback() {
    this.layerName.onclick = () => this.mainLayer()
    this.layerRemove.onclick = () => this.removeLayer()
    this.layershowHide.onclick = () => this.showHideLayer()
  }
}

customElements.define('wc-layer', wcLayer)
