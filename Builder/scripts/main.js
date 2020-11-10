import Director from './Director.js';
import {
  DrinkBuilder,
  BurgerBuilder
} from './ConcreteBuilder.js';

// There are two builders in this shop.
const drinkBuilder1 = new DrinkBuilder();
const burgerBuilder1 = new BurgerBuilder();

// There is one waiter here.
const waiter1 = new Director(drinkBuilder1, burgerBuilder1);

// Now a customer orders a set meal A.
// The waiter conducts everything and 
// the customer just needs to wait a little while.
const m1 = waiter1.construct("A");

// The set meal A is ready.
console.log(m1);



