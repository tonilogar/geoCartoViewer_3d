
class wcLayer extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.layername = this.getAttribute('layername')
    this.infoname = this.getAttribute('infoname')
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
      <img class='layersWindowDataElementInfo' src="./images/legends.svg" alt="Project info">
      <input  type='checkbox' id='layersWindowDataElementInput' class='layersWindowDataElementInput' checked>
      <div class='layersWindowDataElementTitle' >
        <p>${this.layername}</p>
      </div>
      <div class='layersWindowDataElementClose' >
        <p>X</p>
      </div>
    </div>
    <div class='containerLegends'>Legend</div>
      ${this.getStyles()}
    `
    return template
  }

  getStyles() {
    return /*html */ `
    <style>
      
      .layersWindowDataElement {
        display: flex;
        height: 30px;
        padding: 2px;
        /* background-color: blue; */
        border-style: ridge;
      }
      .layersWindowDataElement p {
        font: message-box;
        font-weight: bold;
        font-size: 20px;
        padding: 0px;
        margin: 0px;
        cursor: pointer;
      }
      .layersWindowDataElementInfo {
        background-color: white;
        width: 28px;
        height: 28px;
      }
      .layersWindowDataElementInfo:hover {
        background-color: red;
        cursor: pointer;
      }
      .layersWindowDataElementInput {
        width: 28px;
        height: 28px;
      }
      .layersWindowDataElementTitle {
          width: 100%;
          height: 25px;
          background-color: grey;
          border-style: ridge;
          flex-wrap: wrap;
        }
          .layersWindowDataElementTitle p{
            padding-top: 2px;
            padding-left: 8px;
          }

        .layersWindowDataElementClose {
          width: 28px;
          height: 28px;
          background-color: red;
          margin-left: auto;
        }

          .layersWindowDataElementClose p {
            padding-top: 4px;
            padding-left: 6px;
          }
      .containerLegends {
        position: absolute;
        right: 5px;
        top: 100px;
        width: 280px;
        height: 280px;
        background-color: red;
        display: block;
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
