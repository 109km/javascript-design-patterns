export class Monkey {
  constructor(name){
    this.name = name;
  }
  shout() {
    console.log('Monkey is shouting.');
  }
  accept(operation) {
    operation.visitMonkey(this);
  }
}

export class Lion {
  constructor(name){
    this.name = name;
  }
  roar() {
    console.log('Lion is roaring.');
  }
  accept(operation) {
    operation.visitLion(this);
  }
}

export class Dolphin {
  constructor(name){
    this.name = name;
  }
  speak() {
    console.log('Dolphin is speaking.');
  }
  accept(operation) {
    operation.visitDolphin(this);
  }
}