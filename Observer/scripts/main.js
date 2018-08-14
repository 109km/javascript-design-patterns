import Subscriber from './Subscriber.js';
import Watcher from './Watcher.js';

const watcher = new Watcher();
const ob1 = new Subscriber('ob1', (params) => {
  console.log(`This is ob1`,params);
});

const ob2 = new Subscriber('ob2', (params) => {
  console.log(`This is ob2`,params);
});

watcher.subscribe(ob1);
watcher.subscribe(ob2);


watcher.publish({
  name: 'Hello'
});