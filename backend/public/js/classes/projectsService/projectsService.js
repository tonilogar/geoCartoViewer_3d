  class ProjectsService {

  constructor() {
    this.URI = `http://localhost:4000/api/projects`;
    this.projectById
    this.projectsDataBase
  }

  async getProjects() {
    const response = await fetch(this.URI)
    /* console.log(response, ' response') */
    this.projectsDataBase = await response.json()
    console.log(typeof(this.projectsDataBase), 'dddd')
    return this.projectsDataBase
  }

  async getProjectsById(id) {
    this.projectById = id
    const response = await fetch(`http://localhost:4000/api/projects/${this.projectById}`)
    /* console.log(response, ' response') */
    this.projectById = await response.json()
    return this.projectById
  }

}

export { ProjectsService }