import {
  Iterator,
  Item
} from './Iterator.js';

const list = new Iterator();

list.add(new Item(1));
list.add(new Item(2));
list.add(new Item(3));
list.add(new Item(4));
list.add(new Item(5));

console.log(list.find(new Item(5)));