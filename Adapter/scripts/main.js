import Human from './Human.js';
import {DogAdatper,CatAdapter} from './Adapter.js';
import Cat from './Cat.js';
import Dog from './Dog.js';

let dog = new Dog('Wangcai','white');
let cat = new Cat('Mimi','yellow');
let human = new Human('Kevin');

let dogAdapter = new DogAdatper(dog);
let catAdapter = new CatAdapter(cat);

human.touch(catAdapter);
human.touch(dogAdapter);