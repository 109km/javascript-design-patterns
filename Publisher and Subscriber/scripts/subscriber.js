class Subscriber {
  constructor(name, pub) {
    this.name = name;
    this.pub = pub;
    this.pool = {};
  }
  addToPub() {
    this.pub.addSubscriber(this);
  }
  subscribe(messageKey, afterUpdate) {
    if (this.pool[messageKey]) {
      console.warn(`This "${messageKey}" has already been subscribed.`);
      return;
    }
    this.pool[messageKey] = {
      afterUpdate: afterUpdate
    };
    this.addToPub();
  }
  update(messageKey, params) {
    this.pool[messageKey].afterUpdate.call(this, params);
  }
  unsubscribe(messageKey) {
    this.pool[messageKey] = null;
  }
}

export default Subscriber;