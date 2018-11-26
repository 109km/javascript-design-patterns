export default class Observer {
  constructor(key,callback) {
    this.key = key;
    this.callback = callback;
  }
  update(params){
    this.callback(params);
  }
}