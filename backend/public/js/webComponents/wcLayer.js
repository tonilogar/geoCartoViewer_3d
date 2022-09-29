
class wcLayer extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.pepe = this.getAttribute('pepe')
  }
  

  getTemplate() {
    const template = document.createElement("template")
    template.innerHTML = /*html */`
    <div class="layersWindowDataElement">
      <input onclick="check()" type="checkbox" id='layersWindowDataElementInput' class='layersWindowDataElementInput' checked>
      <div class="layersWindowDataElementTitle">
        <p pepe=${this.pepe} ></p>
      </div>
      <div class="layersWindowDataElementClose">
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
          background-color: green;
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
    this.open = this.shadowRoot.querySelector(".open")
   
  }
}

customElements.define('wc-layer', wcLayer)
