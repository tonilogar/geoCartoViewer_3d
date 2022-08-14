class Test {
  constructor({
    id,
  }) {
    this.id = id
    
  }
  saludo() {
    console.log('Hi')
  }

  get id() {
    return this.id;
  }
  set id(newId) {
    this.id = newId;
  }
}
export { Test }