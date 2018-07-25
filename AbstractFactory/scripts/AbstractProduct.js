export class AbstractMouse{
  click(){
    console.log(`${this.brand}'s mouse is clicked.`);
  }
}

export class AbstractKeyboard{
  press(){
    console.log(`${this.brand}'s keyboard is pressed.`);
  }
}