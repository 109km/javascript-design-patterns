export default class Subscriber {
  constructor(key,callback) {
    this.key = key;
    this.callback = callback;
  }
  notify(params){
    this.callback(params);
  }
}