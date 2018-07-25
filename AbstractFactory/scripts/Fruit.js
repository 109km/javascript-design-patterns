export default class Fruit {
  constructor() {
    this.types = {};
  }
  createFruitFactory(type, factory) {
    this.types[type] = factory;
  }
  getFruitFactory(type) {
    return this.types[type];
  }

}