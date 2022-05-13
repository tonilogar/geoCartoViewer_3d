

class MenuProjectsTestWC extends HTMLElement {
  constructor() {
    super()
    console.log('Web component MenuProjectsTestWC')
  }
  
  
}

customElements.define(add-project, MenuProjectsTestWC)
export { MenuProjectsTestWC }
