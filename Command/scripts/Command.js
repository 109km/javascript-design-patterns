export class MakeFoodCommand{
  constructor(receiver){
    this.receiver = receiver;
  }
  excute(){
    this.receiver.makeFood();
  }
}

export class MakeDrinkCommand{
  constructor(receiver){
    this.receiver = receiver;
  }
  excute(){
    this.receiver.makeDrink();
  }
}