
class BasicClass {
  constructor({id, titleProject, dataProject, legend}) {
    this.id = id
    this.titleProject = titleProject
    this.dataProject = dataProject
    this.legend = legend
  }

  returnData(data) {
    this.titleProject = data
    console.log(this.titleProject + ' this.titleProject')
  }
}

export { BasicClass }