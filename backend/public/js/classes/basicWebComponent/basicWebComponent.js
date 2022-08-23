
class BWComponent extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.showHide = true
    this.container = 'container'
  }

  getTemplate() {
    const template = document.createElement("template")
    template.innerHTML = /*html */`
      <div class='open' title='Add project'>
        <slot name="image"></slot>
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
        .open {
          position: absolute;
          top: 5px;
          left: 100px;
          margin-bottom: 5px;
          width: 30px;
          height: 30px;
          background-color:var(--backgroundButtons);
          border: 5px solid var(--colorSoftGrey);
        }

        .open:hover{
          background-color:var(--colorSoftGrey); 
          cursor: pointer;
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
