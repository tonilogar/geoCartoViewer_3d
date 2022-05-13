import './styles/index.css'
import './styles/menuProjects.css'
import './js/mapbox.js'
import { MenuProjects } from './js/classes/menuProjects/menuProjects'

const menuProjects = new MenuProjects()



document.addEventListener('DOMContentLoaded', () => {
  menuProjects.renderMenuProjects() 
})

