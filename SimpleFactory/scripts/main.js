import PersonFactory from './Person.js';

var pFactory = new PersonFactory();

const p1 = pFactory.create('Jackson', 20);

console.log(p1.getName());