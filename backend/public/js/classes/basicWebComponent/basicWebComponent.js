
class BWComponent extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.showHide = true
    this.container = 'container'
  }
  static get observedAttributes() {
    return ["title", "parrafo", "img", "positionx", "positiony"];
  }
  attributeChangedCallback(attr, oldVal, newVal) {
    if (oldVal !== newVal) {
      this[attr] = newVal
    }
  }

  getTemplate() {
    const template = document.createElement("template")
    template.innerHTML = /*html */`
      <div class='open' title='Add project'>
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
    if (this.showHide) {
      document.querySelector('.basicWC_Container').style.display = 'block'
      this.shadowRoot.querySelector('.open').style.border = '5px solid  var(--colorSoftGreen)'
      this.showHide = false
    }
    else {
      document.querySelector('.basicWC_Container').style.display = 'none'
      this.shadowRoot.querySelector('.open').style.border = '5px solid var(--colorSoftGrey)'
      this.showHide = true
    }
  }
  getStyles() {
    return /*html */ `
    <style>
      @import './css/style.css';
       .open {
          top: ${this.positionx};
          left: ${this.positiony};
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

customElements.define('b-wcomponent', BWComponent)
