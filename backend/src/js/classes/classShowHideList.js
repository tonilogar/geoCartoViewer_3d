class ShowHideList {
  #idButton
  #idList
  #stateButton
  constructor(idButton, idList) {
    this.#idButton = idButton
    this.#idList = idList
    this.#stateButton = true
  }

  //getters
  getStateButton() {
    return  this.#stateButton
  }

  //setters
  setStateButton(stateButton) {
    this.#stateButton = stateButton
  }

  pressButtonShowHideList(){ 
    document.getElementById(this.#idButton).onclick = ()=> {
      if(this.#stateButton === true) {
        document.getElementById(this.#idList).style.display = "block"
        this.#stateButton = false
      }
      else {
        document.getElementById(this.#idList).style.display = "none"
        this.#stateButton = true
      }
    }
  }
}

export default ShowHideList 

