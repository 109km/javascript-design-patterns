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
    this.publish( messageKey, params);
  }
  asyncUpdate(messageKey, params, time) {
    this.asyncPublish(messageKey, params, time);
  }
  publish(messageKey, params) {
    for (let k in this.messages[messageKey]) {
      this.messages[messageKey][k].update(messageKey, params);
    }
  }
  asyncPublish(messageKey, params, time) {
    setTimeout(function() {
      for (let k in this.messages[messageKey]) {
        this.messages[messageKey][k].update(messageKey, params);
      }
    }.bind(this), time);
  }
}

export default Pub;