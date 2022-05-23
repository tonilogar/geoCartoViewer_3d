class ChangeBackground extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" }) 
    this.showHide = true
  }
  
  getTemplate() {
    const template = document.createElement("template")
    template.innerHTML = /*html */`
      <div class='open' title='Background'>
        <svg className="mapBackground" id="mapBackground" viewBox="0 0 650 650">
          <g fill="#010002">
            <path
              d="M289.44 79.226L153.66 18.679a12.68 12.68 0 00-10.356 0L7.524 79.226a12.716 12.716 0 00-.81 22.822l135.78 72.405a12.624 12.624 0 005.983 1.496c2.061 0 4.112-.495 5.994-1.496l135.78-72.405c4.281-2.284 6.886-6.81 6.712-11.661s-3.095-9.186-7.522-11.161zm-140.96 69.61L41.63 91.856 148.48 44.21l106.86 47.646z"
              transform="matrix(1.8871 0 0 2.06 47.852 24.525)">
            </path>
            <path
              d="M278.28 133.4l-129.79 69.228L18.7 133.4c-6.217-3.318-13.908-.968-17.198 5.232-3.302 6.201-.968 13.897 5.227 17.198l135.78 72.421a12.729 12.729 0 0011.977 0l135.78-72.421c6.195-3.301 8.528-10.998 5.227-17.198s-10.998-8.544-17.204-5.232z"
              transform="matrix(1.8871 0 0 2.06 47.852 24.525)">
            </path>
            <path
              d="M278.28 183.06l-129.79 69.218L18.7 183.06c-6.217-3.318-13.908-.957-17.198 5.232-3.302 6.201-.968 13.897 5.227 17.198l135.78 72.416a12.729 12.729 0 0011.977 0l135.78-72.416c6.195-3.301 8.528-10.998 5.227-17.198-3.307-6.19-10.987-8.55-17.204-5.232z"
              transform="matrix(1.8871 0 0 2.06 47.852 24.525)">
            </path>
          </g>
        </svg>
      </div>
      <div id='container' class='container'></div>
      ${this.getStyles()}
      
    `
    return template
  }
  
  clickMenu() {
    if(this.showHide) {
      this.shadowRoot.querySelector('.container').style.display = 'block'
      this.shadowRoot.querySelector('.open').style.border = '5px solid  var(--colorSoftGreen)'
      this.showHide=false
    }
    else {
      this.shadowRoot.querySelector('.container').style.display = 'none' 
      this.shadowRoot.querySelector('.open').style.border = '5px solid var(--colorSoftGrey)'
      this.showHide=true
    }  
  } 
  getStyles() {
    return /*html */ `
      <style>
        .open {
          position: absolute;
          top: 45px;
          left: 0px;
          width: 30px;
          height: 30px;
          background-color:var(--backgroundButtons);
          border: 5px solid var(--colorSoftGrey);
        }

        .open:hover{
          background-color:var(--colorSoftGrey); 
          cursor: pointer;
        }

        .container {
          position: absolute;
          top: 45px;
          left: 45px;
          width: 400px;
          height: 400px;
          background-color: var(--colorSoftGrey);
          display: none;
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
    this.open.addEventListener("click", this.clickMenu.bind(this))
  }
}

customElements.define('change-background', ChangeBackground)
