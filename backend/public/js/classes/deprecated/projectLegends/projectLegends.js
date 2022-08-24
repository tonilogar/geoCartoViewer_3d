class ProjectLegends extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" }) 
    this.showHide = true
  }
  
  getTemplate() {
    const template = document.createElement("template")
    template.innerHTML = /*html */`
      <div class='open' title='legend'>
        <svg viewBox='0 0 650 650' >
          <g style='font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal'
            aria-label='i'>
            <path
              d='m311.59 548.74q-22.057 0-37.711-15.298-15.298-15.654-15.298-37.711v-209.9q0-22.057 15.654-37.711 16.009-15.654 37.355-15.654h0.71153q21.346 0 36.999 15.654t15.654 37.711v209.9q0 22.057-15.654 37.711t-36.999 15.298zm49.095-400.59q0 23.125-16.365 39.134-16.009 16.009-38.422 16.009-22.769 0-38.422-16.009-15.654-16.009-16.009-39.134 0-23.125 16.009-38.778 15.654-16.009 38.422-15.654 22.057 0 38.422 15.298 16.365 15.654 16.365 39.134z'
              stroke-width='18.215'
              style='font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal' />
          </g>
        </svg>
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
    if(this.showHide) {
      document.querySelector('.legends_Container').style.display = 'block'
      this.shadowRoot.querySelector('.open').style.border = '5px solid  var(--colorSoftGreen)'
      this.showHide=false
    }
    else {
      document.querySelector('.legends_Container').style.display = 'none' 
      this.shadowRoot.querySelector('.open').style.border = '5px solid var(--colorSoftGrey)'
      this.showHide=true
    }  
  } 
  getStyles() {
    return /*html */ `
      <style>
        .open {
          position: absolute;
          top: 215px;
          right: 5px;
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
    /* this.append(this.getTemplate().content.cloneNode(true))  */
    this.shadowRoot.append(this.getTemplate().content.cloneNode(true))
  } 
  connectedCallback() {
    this.render()
    this.open = this.shadowRoot.querySelector(".open")
    this.open.addEventListener("click", this)
  }
}

customElements.define('project-legends', ProjectLegends)
