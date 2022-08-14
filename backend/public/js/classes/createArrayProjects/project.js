
class Project {
  constructor({id, projectType, subTitleProject, titleProject, dataProject, legend}) {
    this.id = id
    this.projectType = projectType
    this.subTitleProject = subTitleProject
    this.titleProject = titleProject
    this.dataProject = dataProject
    this.legend = legend
  }

  returnData() {
    this.id = 123456789
  }
}

export { Project }