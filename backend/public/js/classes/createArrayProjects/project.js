
class Project {
  constructor({id, titleProject, dataProject, legend}) {
    this.id = id
    this.titleProject = titleProject
    this.dataProject = dataProject
    this.legend = legend
  }

  returnData() {
    this.id = 123456789
  }
}

export { Project }