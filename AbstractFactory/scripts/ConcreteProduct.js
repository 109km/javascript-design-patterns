import {
  AbstractMouse,
  AbstractKeyboard
} from './AbstractProduct.js';

export class LenovoMouse extends AbstractMouse {
  constructor() {
    super();
    this.brand = 'Lenovo';
  }
}
export class LenovoKeyboard extends AbstractKeyboard {
  constructor() {
    super();
    this.brand = 'Lenovo';
  }
}

export class HPMouse extends AbstractMouse {
  constructor() {
    super();
    this.brand = 'HP';
  }
}

export class HPKeyboard extends AbstractKeyboard {
  constructor() {
    super();
    this.brand = 'HP';
  }
}