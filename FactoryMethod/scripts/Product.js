export class Mouse{
  constructor(options){
    this.type = options.type;
  }
  click(){
    console.log(`Be clicked`);
  }
}

export class Keyboard{
  constructor(options){
    this.type = options.type;
  }
  press(){
    console.log(`Be pressed`);
  }
}

