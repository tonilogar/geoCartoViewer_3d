class ProjectsService {

  constructor() {
    this.URI = `http://sedinsar01/geocartoviewer_3d/api/projects`;
    this.projectById
    this.projectsDataBaseById
    this.projectsDataBase
    this.pepe
  }

  async getProjects() {
    const response = await fetch(this.URI)
    /* console.log(response, ' response') */
    this.projectsDataBase = await response.json()
    return this.projectsDataBase
  }

  async getProjectsById(id) {
    this.projectById = id
    const response = await fetch(this.URI + '/' + this.projectById)
    /* console.log(response, ' response') */
    this.projectsDataBaseById = await response.json()
    return this.projectsDataBaseById
  }

  async getPro() {
    const URL = 'http://sedinsar01/geocartoviewer_3d/api/projects'
    await fetch(URL)
      .then(res => res.json())
      .then(data => {
        console.log(data[1].subTitleProject, ' data[0].titleProject')
        console.log(data, ' data')
        this.pepe = data
        return data[1].subTitleProject
      })
  }

}

export { ProjectsService }