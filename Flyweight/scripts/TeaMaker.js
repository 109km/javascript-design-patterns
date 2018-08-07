import Tea from "./Tea.js";

export default class TeaMaker {
  constructor() {
    this.availableTea = {};
  }
  make(type) {
    this.availableTea[type] = this.availableTea[type] || (new Tea(type));
    return this.availableTea[type];
  }
}