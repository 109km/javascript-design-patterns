class Account{
  constructor(type,balance){
    this.type = type;
    this.balance = balance;
  }
  pay(price){
    if ( this.canPay(price) ){
      console.log(`Payed sucessfully.`);
    }else if (this.successor){
      console.log(`${this.type}'s balance is not enough, try to pay with ${this.successor.type}...`);
      this.successor.pay(price);
    }else{
      console.log(`All the accounts can't pay.`);
    }
  }
  canPay(price){
    return price <= this.balance;
  }
  setNext(successor){
    this.successor = successor;
  }
}

export class Bank extends Account{
  constructor(balance){
    super('bank',balance);
  }
}
export class Alipay extends Account{
  constructor(balance){
    super('alipay',balance);
  }
}
export class Wechat extends Account{
  constructor(balance){
    super('wechat',balance);
  }
}
