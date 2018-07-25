import {
  MouseFactory,
  KeyboardFactory
} from './Factory.js';

const mouseCreator = new MouseFactory();
const keyboardCreator = new KeyboardFactory();

const mouse = mouseCreator.create({
  type: 'wheel'
});
const keyboard = keyboardCreator.create({
  type: 'red'
});


console.log(mouse.click());
console.log(keyboard.press());