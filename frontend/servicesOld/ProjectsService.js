class ProjectsService {

  constructor() {
    this.URI = `http://localhost:4000/api/projects`;
  }

  async getProjects() {
    const response = await fetch(this.URI);
    const books = await response.json();
    return books;
  }

  
}

export default ProjectsService;