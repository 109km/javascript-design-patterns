import AbstractComputerFactory from './AbstractComputerFactory.js';
import {
  LenovoMouse,
  LenovoKeyboard,
  HPMouse,
  HPKeyboard
} from './ConcreteProduct.js';


export class LenovoComputerFactory extends AbstractComputerFactory {
  createMouse() {
    return new LenovoMouse();
  }
  createKeyboard() {
    return new LenovoKeyboard();
  }
}

export class HPComputerFactory extends AbstractComputerFactory {
  createMouse() {
    return new HPMouse();
  }
  createKeyboard() {
    return new HPKeyboard();
  }
}