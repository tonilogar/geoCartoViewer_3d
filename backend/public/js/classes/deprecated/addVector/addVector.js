class AddVector extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" }) 
    this.showHide = true
  }
  
  getTemplate() {
    const template = document.createElement("template")
    template.innerHTML = /*html */`
      <div class='open' title='Add vector'>
        <svg viewBox="0 0 650 650" >
          <g transform="matrix(5.1976 0 0 4.8555 26.444 26.635)">
            <path class="st0"
              d="m105.4 76.3 3.8 3.8c1 1 1 2.6 0 3.6l-3.1 3.1c0.8 1.6 1.5 3.3 1.9 5.1h4c1.4 0 2.6 1.2 2.6 2.6v5.4c0 1.4-1.2 2.6-2.6 2.6h-4.3c-0.5 1.7-1.3 3.4-2.2 4.9l2.8 2.8c1 1 1 2.6 0 3.6l-3.8 3.8c-1 1-2.6 1-3.6 0l-3.1-3.1c-1.6 0.8-3.3 1.5-5.1 1.9v4c0 1.4-1.2 2.6-2.6 2.6h-5.4c-1.4 0-2.6-1.2-2.6-2.6v-4.4c-1.7-0.5-3.4-1.3-4.9-2.2l-2.8 2.8c-1 1-2.6 1-3.6 0l-3.8-3.8c-1-1-1-2.6 0-3.6l3.1-3.1c-0.8-1.6-1.5-3.3-1.9-5.1h-4c-1.4 0-2.6-1.2-2.6-2.6v-5.4c0-1.4 1.2-2.6 2.6-2.6h4.3c0.5-1.7 1.3-3.4 2.2-4.9l-2.7-2.7c-1-1-1-2.6 0-3.6l3.8-3.8c1-1 2.6-1 3.6 0l3.1 3.1c1.6-0.8 3.3-1.5 5.1-1.9v-4c0-1.4 1.2-2.6 2.6-2.6h5.4c1.4 0 2.6 1.2 2.6 2.6v4.3c1.7 0.5 3.4 1.3 4.9 2.2l2.8-2.8c0.8-1 2.5-1 3.5 0zm-64 5.9c-1.4 0-2.5-1.4-2.5-3 0-1.7 1.1-3 2.5-3h12.4c1.4 0 2.5 1.4 2.5 3 0 1.7-1.1 3-2.5 3zm3.7 30.1c1.7 0 3 1.4 3 3 0 1.7-1.4 3-3 3h-38c-1.9 0-3.7-0.8-5-2.1s-2.1-3-2.1-5v-104.1c0-2 0.8-3.7 2.1-5s3-2.1 5-2.1h86.7c1.9 0 3.7 0.8 5 2.1s2.1 3 2.1 5v48.3c0 1.7-1.4 3-3 3-1.7 0-3-1.4-3-3v-48.3c0-0.3-0.1-0.5-0.3-0.7s-0.4-0.3-0.7-0.3h-86.8c-0.3 0-0.5 0.1-0.7 0.3-0.2 0.1-0.3 0.4-0.3 0.7v104.3c0 0.3 0.1 0.5 0.3 0.7s0.4 0.3 0.7 0.3h38zm-26.3-38.2h10.7c0.6 0 1 0.4 1 1v9.2c0 0.6-0.4 1-1 1h-10.7c-0.6 0-1-0.4-1-1v-9.2c0-0.6 0.4-1 1-1zm0-52.9h10.7c0.6 0 1 0.4 1 1v9.2c0 0.6-0.4 1-1 1h-10.7c-0.6 0-1-0.4-1-1v-9.2c0-0.6 0.4-1 1-1zm22.6 8.1c-1.4 0-2.5-1.4-2.5-3 0-1.7 1.1-3 2.5-3h34.7c1.4 0 2.5 1.4 2.5 3 0 1.7-1.1 3-2.5 3zm-19.5 28.1c-0.7 0.5-1.6 0.4-2.3-0.3l-0.2-0.2-3.2-3.3c-0.7-0.7-0.5-1.8 0.3-2.6 0.9-0.7 2.1-0.8 2.8-0.1l1.7 1.8 5.6-4.5c0.7-0.6 1.9-0.3 2.5 0.6 0.7 0.9 0.6 2.2-0.2 2.8zm17.8-2.6c-1.4 0-2.5-1.4-2.5-3 0-1.7 1.1-3 2.5-3h34.7c1.4 0 2.5 1.4 2.5 3 0 1.7-1.1 3-2.5 3zm48.4 31.1c5.8 0 10.6 4.7 10.6 10.6 0 5.8-4.7 10.6-10.6 10.6-5.8 0-10.6-4.7-10.6-10.6s4.8-10.6 10.6-10.6z" />
          </g>
          <circle cx="485.42" cy="493.71" r="50.149" fill="#fff" stroke-width="1.2262" />
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
      document.querySelector('.vector_Container').style.display = 'block'
      this.shadowRoot.querySelector('.open').style.border = '5px solid  var(--colorSoftGreen)'
      this.showHide=false
    }
    else {
      document.querySelector('.vector_Container').style.display =  'none' 
      this.shadowRoot.querySelector('.open').style.border = '5px solid var(--colorSoftGrey)'
      this.showHide=true
    }  
  } 
  getStyles() {
    return /*html */ `
      <style>
        .open {
          position: absolute;
          top: 140px;
          left: 5px;
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

customElements.define('add-vector', AddVector)
