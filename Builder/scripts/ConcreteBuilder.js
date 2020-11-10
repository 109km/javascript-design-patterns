
/**
 * @description The builders don't need to know
 * what composes a set meal.
 * They just need to follow the very basic orders:
 * Create a small drink ! 
 * Create a large burger !
 */

import AbstractBuilder from './AbstractBuilder.js';

export class DrinkBuilder extends AbstractBuilder {
  constructor(meal) {
    super();
    this.meal = meal;
  }
  setDrink(drinkType) {
    this.meal.setDrink(drinkType);
  }
}

export class BurgerBuilder extends AbstractBuilder {
  constructor(meal) {
    super();
    this.meal = meal;
  }
  setBurger(burgerType) {
    this.meal.setBurger(burgerType);
  }
}