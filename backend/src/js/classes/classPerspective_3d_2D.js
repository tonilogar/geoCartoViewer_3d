//The parameter _valuePitch alwais is map.getPitch() 
class Perspective_3d_2D {
  //Private variables
  #idButton_2D //String
  #idButton_3D //String
  #valuePitch //method object map value pitch
  
  constructor(idButton_2D, idButton_3D, valuePitch) {
    this.#idButton_2D = idButton_2D
    this.#idButton_3D = idButton_3D
    this.#valuePitch = valuePitch
  }

  //Getters
  getValuePitch() {
    return  this.#valuePitch
  }
  getIdButton_2D() {
    return  this.#idButton_2D
  }
  getIdButton_3D() {
    return  this.#idButton_3D
  }

  //Setters
  setValuePitch(valuePitch) {
    this.#valuePitch = valuePitch
  }
  setIdButton_2D(idButton_2D) {
    this.#idButton_2D = idButton_2D
  }
  setIdButton_3D(idButton_3D) {
    this.#idButton_3D = idButton_3D
  }

  //Methods
  checkValuePitch (valuePitch){
    return (valuePitch != 0)? true :false
  }

  showIdButton_2D_3D (valuePitch) {
    if(valuePitch == true) {
      document.getElementById(this.#idButton_3D).style.display = "none"
      document.getElementById(this.#idButton_2D).style.display = "block"
    } 
    else {
      document.getElementById(this.#idButton_3D).style.display = "block"
      document.getElementById(this.#idButton_2D).style.display = "none"
    } 
  }

  disableEnableIdButton_2d(){ 
    document.getElementById(this.#idButton_2D).onclick = ()=> {
    document.getElementById(this.#idButton_3D).style.display = "block"
    document.getElementById(this.#idButton_2D).style.display = "none"
    this.setValuePitch(0)
    map.easeTo({ pitch: this.getValuePitch() })
    }
  }
  disableEnableIdButton_3d(){
    document.getElementById(this.#idButton_3D).onclick = ()=> {
    document.getElementById(this.#idButton_3D).style.display = "none"
    document.getElementById(this.#idButton_2D).style.display = "block"
    this.setValuePitch(70)
    map.easeTo({ pitch: this.getValuePitch() })
    }
  } 
}
export default Perspective_3d_2D

