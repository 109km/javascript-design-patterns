import Observer from './Observer.js';
import Subject from './Subject.js';

const sub = new Subject();
const ob1 = new Observer('ob1', (params) => {
  console.log(`This is ob1`, params);
});

const ob2 = new Observer('ob2', (params) => {
  console.log(`This is ob2`, params);
});

sub.subscribe(ob1);
sub.subscribe(ob2);

setTimeout(function() {
  sub.notify({
    name: 'Hello'
  });
}, 1000);

setTimeout(function() {
  sub.remove('ob2');
  sub.notify({
    name: 'World'
  });
}, 2000);