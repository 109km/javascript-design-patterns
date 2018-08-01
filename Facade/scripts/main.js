import Computer from './Computer.js';
import ComputerFacade from './ComputerFacade.js';

let computer = new Computer();
let computerControl = new ComputerFacade(computer);

computerControl.turnOn();
computerControl.turnOff();