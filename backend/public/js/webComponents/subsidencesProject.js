
class SubsidencesProject extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.showHide = true
    this.container = this.getAttribute('container')
  }
  static get observedAttributes() {
    return ['projectName', 'title', 'container', 'ptop', 'pright', 'pbottom', 'pleft'];
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

customElements.define('subsidences-project', SubsidencesProject)
