export default class ChatRoom {
  constructor() {
    this.users = [];
  }
  add(user) {
    this.users.push(user);
  }
  send(fromUser, msg) {
    this.users.forEach(user => {
      if (user.name != fromUser.name) {
        user.receive(fromUser, msg);
      }
    });
  }
}