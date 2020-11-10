export default class AbstractBuilder {
  constructor(meal) {
    this.meal = meal;
  }
  setDrink() { }
  setBurger() { }

  getMeal() {
    return this.meal;
  }
  setMeal(meal) {
    this.meal = meal;
  }
}