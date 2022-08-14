//The parameter _valuePitch alwais is map.getPitch() 
class OpenCloseMenu {
    #idButtonOpen
    #idButtonClose
    #idContainerTools
  constructor(idButtonOpen, idButtonClose, idContainerTools) {
    this.#idButtonOpen = idButtonOpen
    this.#idButtonClose = idButtonClose
    this.#idContainerTools = idContainerTools
  }

  disableEnableIdButtonOpen(){ 
    document.getElementById(this.#idButtonOpen).onclick = ()=> {
    document.getElementById(this.#idButtonClose).style.display = "block"
    document.getElementById(this.#idButtonOpen).style.display = "none"
    document.getElementById(this.#idContainerTools).style.display = "block"
    }
  }

  disableEnableIdButtonClose(){ 
    document.getElementById(this.#idButtonClose).onclick = ()=> {
    document.getElementById(this.#idButtonOpen).style.display = "block"
    document.getElementById(this.#idButtonClose).style.display = "none"
    document.getElementById(this.#idContainerTools).style.display = "none"
    }
  }
}

export default OpenCloseMenu 

