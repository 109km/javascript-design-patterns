import {
  DevelopmentManager,
  DesignerManager
} from './Manager.js';

const dev = new DevelopmentManager('Rose');
const designer = new DesignerManager('Bob');
console.log(dev.takeInterview('Daisy'));
console.log(designer.takeInterview('Russel'));