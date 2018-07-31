export class BasicCoffee {
  getCost() {
    return 10;
  }
  getDescription() {
    return `Basic Coffee`;
  }
}

export class MochaCoffee {
  constructor(coffee) {
    this.coffee = coffee;
  }
  getCost() {
    return this.coffee.getCost() * 2;
  }
  getDescription() {
    return this.coffee.getDescription() + ', Mocha';
  }
}

export class MilkCoffee {
  constructor(coffee) {
    this.coffee = coffee;
  }
  getCost() {
    return this.coffee.getCost() + 10;
  }
  getDescription() {
    return this.coffee.getDescription() + ', Milk';
  }
}