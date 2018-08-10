export default class TeaShop {
  constructor() {
    this.teaMakers = [];
    this.orders = [];
  }
  addTeaMaker(teaMaker) {
    this.teaMakers.push(teaMaker);
  }
  takerOrder(table, teaType) {
    this.teaMakers.forEach((maker, index) => {
      if (!!maker.availableTea[teaType]) {
        this.orders[table] = maker.make(teaType);
      }
    });
  }
  serve() {
    this.orders.forEach((order, index) => {
      console.log(`Serving tea to table#${index}, the order is ${order.getType()}`);
    });
  }
}