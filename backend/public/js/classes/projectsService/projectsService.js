class ProjectsService {

  constructor() {
    this.URI = `http://localhost:4000/api/projects`
    
    this.projectById
    this.projectsDataBaseById
    this.projectsDataBase

    this.URIBACKGROUND = `http://localhost:4000/api/backgrounds`
    this.backgroundById
    this.backgroundsDataBaseById
    this.backgroundsDataBase
    
  }

  async getProjects() {
    const response = await fetch(this.URI)
    console.log(response, ' getProjects')
    this.projectsDataBase = await response.json()
    console.log(this.projectsDataBase, ' this.projectsDataBase')
    return this.projectsDataBase
    
  }

  async getProjectsById(id) {
    this.projectById = id
    const response = await fetch(this.URI + '/' + this.projectById)
    console.log(response, ' getProjectsById')
    this.projectsDataBaseById = await response.json()
    console.log(this.projectsDataBaseById, ' this.projectsDataBaseById')
    return this.projectsDataBaseById
  }

  async getBackground() {
    const response = await fetch(this.URIBACKGROUND)
    /* console.log(response, ' response') */
    this.backgroundsDataBase = await response.json()
    return this.backgroundsDataBase
  }

  async getBackgroundById(background) {
    this.backgroundById = background
    const response = await fetch(this.URIBACKGROUND + '/' + this.backgroundById)
    /* console.log(response, ' response') */
    this.backgroundsDataBaseById = await response.json()
    return this.backgroundsDataBaseById
  }


  /* async getPro() {
    const URL = `http://localhost:4000/api/projects`
    await fetch(URL)
      .then(res => res.json())
      .then(data => {
        console.log(data[1].subTitleProject, ' data[0].titleProject')
        //console.log(data, ' data')
        this.pepe = data
        return data[1].subTitleProject
      })
  } */

}

export { ProjectsService }
