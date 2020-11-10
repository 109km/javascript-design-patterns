export default class Meal {
  constructor(drink, burger) {
    this.drink = drink;
    this.burger = burger;
  }
  setDrink(drinkType) {
    this.drink = drinkType;
  }
  setBurger(burgerType) {
    this.burger = burgerType;
  }
}