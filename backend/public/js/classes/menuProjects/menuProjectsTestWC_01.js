class MenuProjectsTestWC extends HTMLElement {
  constructor() {
    super()
   /*  this.attachShadow({ mode: "open" }) */
  }
  getTemplate() {
    const template = document.createElement("template")
    template.innerHTML = `
      <svg id='section_Tools--MenuOpen' onClick='showHideTools()' class='section_Tools--MenuOpen' viewBox='0 0 92.833 92.833'>
        <g fill='#030000' stroke='#000' stroke-dashoffset='300.69' stroke-linecap='round' stroke-linejoin='round'
          stroke-miterlimit='.9' stroke-width='7.3832'>
          <rect x='11.85' y='45.884' width='70.245' height='.026882' style='paint-order:markers fill stroke' />
          <rect x='11.9' y='18.461' width='70.245' height='.026882' style='paint-order:markers fill stroke' />
          <rect x='12.058' y='73.691' width='70.245' height='.026882' style='paint-order:markers fill stroke' />
        </g>
      </svg>
      <svg id='section_Tools--MenuClose' onClick='showHideTools()' class='section_Tools--MenuClose' viewBox='0 0 92.833 92.833'>
        <path d='m14.451 14.313 63.763 64.176' fill='#1a1a1a' stroke='#1a1a1a' stroke-linecap='round' stroke-width='10.338' />
        <path d='m78.236 14.398-63.706 64.063' fill='#1a1a1a' stroke='#1a1a1a' stroke-linecap='round'
        stroke-linejoin='round' stroke-width='10.32' />
      </svg>
      ${this.getStyles()}
    `
    return template;
  }
  /* saludo() {
    console.log('Hiiii')
  } */
  
  getStyles() {
    return `
      <style>
        .section_Tools--MenuOpen, .section_Tools--MenuClose {
          position: absolute;
          top: 5px;
          left: 5px;
          width: 30px;
          height: 30px;
          background-color:var(--backgroundButtons);
          z-index: 10;
        }

        .section_Tools--MenuClose {
          display: none;
        }
        .section_Tools--MenuOpen:hover, .section_Tools--MenuClose:hover{
          background-color:var(--colorTextSoftGrey); 
          cursor: pointer;
        }

        .section_Tools_Container {
          position: absolute;
          top: 10px;
          left: 45px;
          background-color: rgba(255, 255, 255, 0.808);
          display: none;
        }

        .section_Tools_Container ul, li, /* label, input, */ select  {
          display: block;
        }
        .section_Tools_Container ul {
          margin: 0px;
          padding: 5px;
        }
      </style>
    `
  }
  render() {
    this.appendChild(this.getTemplate().content.cloneNode(true))
    /* this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true)) */
  }
  connectedCallback() {
    this.render()
  }

}

customElements.define('menu-projects', MenuProjectsTestWC)

