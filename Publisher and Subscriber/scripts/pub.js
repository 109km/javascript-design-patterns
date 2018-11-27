class Pub {
  constructor() {
    this.messages = {};
  }
  addSubscriber(subscriber) {
    for (let k in subscriber.pool) {
      if (!this.messages[k]) {
        this.messages[k] = {};
      }
      this.messages[k][subscriber.name] = subscriber;
    }
  }
  update(messageKey, params) {
    this.publish.call(this, messageKey, params);
  }
  publish(messageKey, params) {
    for (let k in this.messages[messageKey]) {
      this.messages[messageKey][k].update(messageKey, params);
    }
  }
}

export default Pub;