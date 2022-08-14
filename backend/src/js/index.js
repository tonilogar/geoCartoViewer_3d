import Perspective_3d_2D from "./classes/classPerspective_3d_2D_01.js";
import DisplacementPointValues from "./classes/classDisplacementPointValuesTest.js";
import OpenCloseMenu from "./classes/classOpenCloseMenu.js";
import ShowHideList from "./classes/classShowHideList.js";


//Create object DisplacementPointValues

const displacementPointValues = new DisplacementPointValues();


//Actions Perspective_3d_2D //////////////////////////////////////////
const perspective_3d_2D = new Perspective_3d_2D("section__Widgets--view_2d_3d--2d", "section__Widgets--view_2d_3d--3d", map.getPitch())
perspective_3d_2D.disableEnableIdButton_2d()
perspective_3d_2D.disableEnableIdButton_3d()

const idButton_2D_3D = map.on('mouseup', function (event) {
  perspective_3d_2D.setValuePitch(map.getPitch())  
  let _valuePitch = perspective_3d_2D.getValuePitch()
  let checValuePitch = perspective_3d_2D.checkValuePitch(_valuePitch)
  perspective_3d_2D.showIdButton_2D_3D(checValuePitch)
})
//Actions Perspective_3d_2D //////////////////////////////////////////


//Actions OpenCloseMenu //////////////////////////////////////////
const openCloseMenu = new OpenCloseMenu("section__Tools--MenuOpen", "section__Tools--MenuClose", "section__Tools__Container")
openCloseMenu.disableEnableIdButtonOpen()
openCloseMenu.disableEnableIdButtonClose()
//Actions OpenCloseMenu //////////////////////////////////////////
//Actions ShowHideList menu projects //////////////////////////////////////////
const menuProjects = new ShowHideList("section__Tools__Projects", "section__Tools__Projects__Type")
menuProjects.pressButtonShowHideList()
//Actions ShowHideList menu projects //////////////////////////////////////////
//Actions ShowHideList menu subsidencies //////////////////////////////////////////
const menuSubs = new ShowHideList("projetcSubsidencies", "projects__Div")
menuSubs.pressButtonShowHideList()
//Actions ShowHideList menu subsidencies//////////////////////////////////////////