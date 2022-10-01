
class wcLayer extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.layername = this.getAttribute('layername')
  }
  static get observedAttributes() {
    return ['layername'];
  }
  attributeChangedCallback(attr, oldVal, newVal) {
    if (oldVal !== newVal) {
      this[attr] = newVal
    }
  }
  mainLayer() {
    console.log('main layer')
    this.shadowRoot.querySelector('.layersWindowDataElementTitle').style.backgroundColor='green'
  }

  removeLayer() {
    console.log('remove layer')
    this.shadowRoot.querySelector('.layersWindowDataElement').remove()
  }

  showHideLayer() {
    console.log('show hide layer')
    if(this.shadowRoot.querySelector('.layersWindowDataElementInput').checked){
      console.log('check')
    }
    else {
      console.log('no check')
    }
    
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
    </div>
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
      .layersWindowDataElementInput {
        width: 20px;
        height: 20px;
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
          width: 30px;
          height: 30px;
          background-color: red;
          margin-left: auto;
        }

          .layersWindowDataElementClose p {
            padding-top: 4px;
            padding-left: 6px;
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
    this.layerName.addEventListener('click', this.mainLayer.bind(this))

    this.layerRemove = this.shadowRoot.querySelector('.layersWindowDataElementClose')
    this.layerRemove.addEventListener('click', this.removeLayer.bind(this))

    this.layershowHide = this.shadowRoot.querySelector('.layersWindowDataElementInput')
    this.layershowHide.addEventListener('click', this.showHideLayer.bind(this))
    

    
  }
}

customElements.define('wc-layer', wcLayer)
