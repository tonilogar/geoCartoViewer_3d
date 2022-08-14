//The parameter _valuePitch alwais is map.getPitch() 
class Perspective_3d_2D {
    #idButton_2D
    #idButton_3D
    #valuePitch
  constructor(idButton_2D, idButton_3D, valuePitch) {
    this.#idButton_2D = idButton_2D
    this.#idButton_3D = idButton_3D
    this.#valuePitch = valuePitch
  }

  getValuePitch() {
    return  this.#valuePitch
  }

  setValuePitch(valuePitch) {
    this.#valuePitch = valuePitch
  }

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

/* const perspective_3d_2D = new Perspective_3d_2D("section__Widgets--view_2d_3d--2d", "section__Widgets--view_2d_3d--3d")
perspective_3d_2D.disableEnableIdButton_2d()
perspective_3d_2D.disableEnableIdButton_3d()

const idButton_2D_3D = map.on('mouseup', function (event) {
  let _valuePitch = perspective_3d_2D.getValuePitch()
  let checValueP = perspective_3d_2D.checkValuePitch(_valuePitch)
  perspective_3d_2D.showIdButton_2D_3D(checValueP)
})  */
export default Perspective_3d_2D

