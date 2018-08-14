export default class User {
  constructor(name) {
    this.name = name;
  }
  join(room) {
    this.room = room;
    room.add(this);
  }
  send(msg) {
    this.room.send(this, msg);
  }
  receive(user, msg) {
    console.log(`${this.name} received message: ${msg} - from: ${user.name}`);
  }
}