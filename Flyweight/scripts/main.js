import TeaShop from './TeaShop.js';
import TeaMaker from './TeaMaker.js';

let shop = new TeaShop();
let maker1 = new TeaMaker();
let maker2 = new TeaMaker();

maker1.make('Mocha');
maker1.make('US');
maker2.make('White');
maker2.make('Moli');

shop.addTeaMaker(maker1);
shop.addTeaMaker(maker2);

shop.takerOrder(13,'Moli');
shop.takerOrder(8,'White');

shop.serve();