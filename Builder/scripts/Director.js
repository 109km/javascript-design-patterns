/**
 * @description The director knows what kind of 
 * drinks and burgers compose a set meal.
 * 
 * He tells the builders what concrete products to build.
*/

import Meal from './Meal.js';
export default class Director {
  constructor(drinkBuilder, burgerBuilder) {
    this.drinkBuilder = drinkBuilder;
    this.burgerBuilder = burgerBuilder;
  }
  setBuilder(type, builder) {
    if (type === 'drink') {
      this.drinkBuilder = builder;
    }
    if (type === 'burger') {
      this.burgerBuilder = builder;
    }
  }
  getMealDetail(mealType) {
    let drink = "small";
    let burger = "small";
    if (mealType === 'A') {
      burger = "large";
    }
    if (mealType === 'B') {
      drink = "large";
      burger = "large";
    }
    if (mealType === 'C') {
      drink = "mid";
    }
    return {
      drink,
      burger
    }
  }
  construct(mealType) {
    const meal = new Meal();

    // Decide the details of this meal.
    const detail = this.getMealDetail(mealType);

    // Tell the builders a new meal is coming.
    this.drinkBuilder.setMeal(meal);
    this.burgerBuilder.setMeal(meal);

    // Tell the builders the meal's details
    this.drinkBuilder.setDrink(detail.drink);
    this.burgerBuilder.setBurger(detail.burger);

    return this.burgerBuilder.getMeal();
  }
}
