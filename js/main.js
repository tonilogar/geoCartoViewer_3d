
//Create tools project menu 
import { MenuProjects } from './classes/menuProjects/menuProjects.js'
import { arrayProjects } from './arrayProjects.js'
import { ContainerProjects } from './classes/containerProjects/containerProjects.js'
const menuProjects = new MenuProjects(arrayProjects)
const containerProjects = new ContainerProjects(arrayProjects)

menuProjects.createListMenuTools()
//Create tools project menu 

/* import { Test } from './classes/test/test.js'
const test = new Test({
  id: 'id',
  titleProject: 'titleProject',
  dataProject: 'dataProject',
  legend: 'legend',
})
test.saludo()

console.log('test.id ' + test.id)
test.id = 'pepe'
console.log('test.id ' + test.id)
 */
