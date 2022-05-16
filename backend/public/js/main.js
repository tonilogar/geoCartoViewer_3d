

import { MenuProjects } from './classes/menuProjects/menuProjects.js'
import "./classes/menuProjects/menuProjectsTestWC.js"
import "./mapbox.js"


const menuProjects = new MenuProjects()



document.addEventListener('DOMContentLoaded', () => {
  menuProjects.renderMenuProjects() 
})



