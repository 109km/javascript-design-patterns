import Fruit from './Fruit.js';

const FruitFactory = new Fruit();

FruitFactory.createFruitFactory('apple', function(size) {
  this.size = size;
});

FruitFactory.createFruitFactory('pitch', function(color) {
  this.color = color;
});

const Apple = FruitFactory.getFruitFactory('apple');
const Pitch = FruitFactory.getFruitFactory('pitch');
let apple = new Apple(10);
let pitch = new Pitch('red');
console.log(apple, pitch);