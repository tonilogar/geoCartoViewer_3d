import { Points } from './classes/points/points.js'

class WCPoints extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
  }
  static get observedAttributes() {
    return ['img', 'title', 'container', 'ptop', 'pright', 'pbottom', 'pleft'];
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
      
      </div>
      ${this.getStyles()}
    `
    return template
  }

  handleEvent(event) {
    if (event.type === "click")
      this.clickMenu();
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

customElements.define('wc-points', WCPoints)
