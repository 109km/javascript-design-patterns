export default class Watcher {
  constructor() {
    this.subscribers = [];
  }
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
  publish(params) {
    this.subscribers.forEach(subscriber => {
      subscriber.notify(params);
    });
  }
}