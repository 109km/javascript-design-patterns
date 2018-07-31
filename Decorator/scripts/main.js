import {
  BasicCoffee,
  MilkCoffee,
  MochaCoffee
} from './Coffee.js';

let coffee = new BasicCoffee();

let milk = new MilkCoffee(coffee);
console.log(milk.getCost());
console.log(milk.getDescription());