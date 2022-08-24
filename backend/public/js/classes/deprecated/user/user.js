class User extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" }) 
    this.showHide = true
  }
  
  getTemplate() {
    const template = document.createElement("template")
    template.innerHTML = /*html */`
      <div class='open' title='User'>
        <svg viewBox='0 0 650 650'>
          <circle cx='313.65' cy='176.65' r='101.73' fill='none' stroke='#000' stroke-dashoffset='300.69'
            stroke-linecap='square' stroke-linejoin='round' stroke-width='40' style='paint-order:markers fill stroke' />
          <ellipse cx='320.3' cy='592.76' rx='192.43' ry='232.06' fill='none' stroke='#000' stroke-dashoffset='300.69'
          stroke-linecap='square' stroke-linejoin='round' stroke-width='45.481' style='paint-order:markers fill stroke' />
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
      document.querySelector('.user_Container').style.display = 'block'
      this.shadowRoot.querySelector('.open').style.border = '5px solid  var(--colorSoftGreen)'
      this.showHide=false
    }
    else {
      document.querySelector('.user_Container').style.display = 'none' 
      this.shadowRoot.querySelector('.open').style.border = '5px solid var(--colorSoftGrey)'
      this.showHide=true
    }  
  } 
  getStyles() {
    return /*html */ `
      <style>
        .open {
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

customElements.define('user-menu', User)
