import Door from './Door.js';
import Security from './Security.js';

let door = new Door();
let secureDoor = new Security(door);

secureDoor.createNewPassword('#12312389');
secureDoor.open('Hello');