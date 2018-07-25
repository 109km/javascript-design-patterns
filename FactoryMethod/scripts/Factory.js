import {
  Mouse,
  Keyboard
} from './Product.js';

/**
 * This is the abstract class.
 * Here defines the methods that will be implemented by the concrete classes.
 * Usually, the concrete instance will be created in the concrete classes.
 */
class ComputerFactory {
  create(){}
  getType(){}
}

export class MouseFactory extends ComputerFactory {
  create(options) {
    return new Mouse(options);
  }
}

export class KeyboardFactory extends ComputerFactory {
  create(options){
    return new Keyboard(options);
  }
}