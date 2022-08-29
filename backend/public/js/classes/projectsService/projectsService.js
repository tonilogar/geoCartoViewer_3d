  class ProjectsService {

  constructor() {
    this.URI = `http://localhost:4000/api/projects`;
    this.id
  }

  async getProjects() {
    const response = await fetch(this.URI)
    /* console.log(response, ' response') */
    const projects = await response.json()
    return projects
  }

  async getProjectsById(id) {
    this.id = id
    const response = await fetch(`http://localhost:4000/api/projects/${this.id}`)
    /* console.log(response, ' response') */
    const projects = await response.json()
    return projects
  }

}

export { ProjectsService }