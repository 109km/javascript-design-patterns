export default class Subject {
  constructor() {
    this.subscribers = [];
  }
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
  remove(key) {
    this.subscribers.map(function(subscriber, index) {
      if (subscriber.key === key) {
        this.subscribers.shift(index);
      }
    }.bind(this));
  }
  notify(params) {
    this.subscribers.forEach(subscriber => {
      subscriber.update(params);
    });
  }
}