
class BWComponentTest extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.showHide = true
    this.container = this.getAttribute('container')
  }
  static get observedAttributes() {
    return ['img', 'title', 'container', 'ptop', 'pright', 'pbottom', 'pleft', 'pwidth', 'pheight','arraydata' ];
  }
  
  attributeChangedCallback(attr, oldVal, newVal) {
    if (oldVal !== newVal) {
      this[attr] = newVal 
    }
  }

  getTemplate() {
    const template = document.createElement("template")
    template.innerHTML = /*html */`
      <div class='open' title=${this.title} >
        <img src=${this.img} />
      </div>
      ${this.getStyles()}
    `
    return template
  }

  handleEvent(event) {
    if (event.type === "click")
      this.clickMenu();
  }

  clickMenu() {
    console.log('click test ', typeof(this.arraydata))
    let arr = this.arraydata.split(','); 
    //dividir la cadena de texto por una coma
    console.log(arr)
    arr.forEach(element => {
      console.log(element, 'element')
    })
  }
  getStyles() {
    return /*html */ `
    <style>
      @import './css/style.css';
       .open {
          top: ${this.ptop};
          right: ${this.pright};
          bottom: ${this.pbottom};
          left: ${this.pleft};
          width:  ${this.pwidth};
          height:  ${this.height};
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

customElements.define('b-wcomponent-test', BWComponentTest)
