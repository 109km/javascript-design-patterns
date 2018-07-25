import {
  LenovoComputerFactory,
  HPComputerFactory
} from './ConcreteComputerFactory.js';


function chooseBrand(brand){
  let factory;
  if (brand === 'Lenovo'){
    factory = new LenovoComputerFactory();
  }else{
    factory = new HPComputerFactory();
  }
  return factory;
}

const hpFactory = chooseBrand('HP');
const hpMouse = hpFactory.createMouse();
const hpKeyboard = hpFactory.createKeyboard();

hpMouse.click();
hpKeyboard.press();


const lenovoFactory = chooseBrand('Lenovo');
const lenovoMouse = lenovoFactory.createMouse();
const lenovoKeyboard = lenovoFactory.createKeyboard();

lenovoMouse.click();
lenovoKeyboard.press();