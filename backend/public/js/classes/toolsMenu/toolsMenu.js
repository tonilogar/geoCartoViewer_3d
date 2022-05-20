class MenuTools extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.showHideTools = true
  }

  getTemplate() {
    const template = document.createElement("template")
    template.innerHTML = /*html */`
      <svg id='toolsMenuOpen'  class='toolsMenuOpen' viewBox='0 0 92.833 92.833'>
        <g fill='#030000' stroke='#000' stroke-dashoffset='300.69' stroke-linecap='round' stroke-linejoin='round'
          stroke-miterlimit='.9' stroke-width='7.3832'>
          <rect x='11.85' y='45.884' width='70.245' height='.026882' style='paint-order:markers fill stroke' />
          <rect x='11.9' y='18.461' width='70.245' height='.026882' style='paint-order:markers fill stroke' />
          <rect x='12.058' y='73.691' width='70.245' height='.026882' style='paint-order:markers fill stroke' />
        </g>
      </svg>
      <svg id='toolsMenuClose' class='toolsMenuClose' viewBox='0 0 92.833 92.833'>
        <path d='m14.451 14.313 63.763 64.176' fill='#1a1a1a' stroke='#1a1a1a' stroke-linecap='round' stroke-width='10.338' />
        <path d='m78.236 14.398-63.706 64.063' fill='#1a1a1a' stroke='#1a1a1a' stroke-linecap='round'
        stroke-linejoin='round' stroke-width='10.32' />
      </svg>
      <div id='toolsMenuContainer' class='toolsMenuContainer'>
        <tools-menu-add-project></tools-menu-add-project>
      </div>
      ${this.getStyles()}
      
    `
    return template
  }

  clickToolsMenu() {
    if (this.showHideTools) {
      /*  console.log('Click this.showHideTools=true') */
      this.shadowRoot.getElementById('toolsMenuClose').style.display = 'block'
      this.shadowRoot.getElementById('toolsMenuOpen').style.display = 'none'
      this.shadowRoot.getElementById('toolsMenuContainer').style.display = 'block'
      this.showHideTools = false
    }
    else {
      /* console.log('Click this.showHideTools=false') */
      this.shadowRoot.getElementById('toolsMenuOpen').style.display = 'block'
      this.shadowRoot.getElementById('toolsMenuClose').style.display = 'none'
      this.shadowRoot.getElementById('toolsMenuContainer').style.display = 'none'
      this.showHideTools = true
    }
  }
  getStyles() {
    return /*html */ `
      <style>
        .toolsMenuOpen, .toolsMenuClose {
          position: absolute;
          top: 5px;
          left: 5px;
          width: 40px;
          height: 40px;
          background-color:var(--backgroundButtons);
        }

        .toolsMenuClose {
          display: none;
        }
        .toolsMenuOpen:hover, .toolsMenuClose:hover{
          background-color:var(--colorTextSoftGrey); 
          cursor: pointer;
        }

        .toolsMenuContainer {
          position: absolute;
          top: 5px;
          left: 45px;
          width: 400px;
          height: 400px;
          background-color: red;
          display: none;
        }

      </style>
    `
  }
  render() {
    /* this.appendChild(this.getTemplate().content.cloneNode(true))  */
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
  }
  connectedCallback() {
    this.render()
    this.toolsMenuOpen = this.shadowRoot.getElementById("toolsMenuOpen")
    this.toolsMenuOpen.addEventListener("click", this.clickToolsMenu.bind(this))

    this.toolsMenuClose = this.shadowRoot.getElementById("toolsMenuClose")
    this.toolsMenuClose.addEventListener("click", this.clickToolsMenu.bind(this))
  }
}

customElements.define('tools-menu', MenuTools)
