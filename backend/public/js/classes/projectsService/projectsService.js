class ProjectsService {

  constructor() {
    this.URI = `http://localhost:4000/api/projects`;
  }

  async getProjects() {
    const response = await fetch(this.URI);
    /* console.log(response, ' response') */
    const projects = await response.json();
    return projects
  }

  
}

export { ProjectsService }