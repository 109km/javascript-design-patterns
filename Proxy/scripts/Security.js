import Base64 from './Base64.js';

let encodedPassword = Base64.encode('Hello');

export default class Security {
  constructor(door) {
    this.door = door;
  }
  open(password) {
    if (this.check(password)) {
      this.door.open();
    } else {
      console.log(`Sorry, the password is wrong.`);
    }
  }
  check(password) {
    return Base64.encode(password) === encodedPassword;
  }
  close() {
    this.door.close();
  }
  createNewPassword(password) {
    encodedPassword = Base64.encode(password);
  }
}