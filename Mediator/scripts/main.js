import ChatRoom from './ChatRoom.js';
import User from './User.js';

const room = new ChatRoom();
const user1 = new User('John');
const user2 = new User('Ken');

user1.join(room);
user2.join(room);

user1.send('hello!');
