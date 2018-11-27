class Publisher {
  constructor(messageKey, pub) {
    this.messageKey = messageKey;
    this.pub = pub;
  }
  notify(params) {
    this.pub.update(this.messageKey, params);
  }
  asyncNotify(params, time) {
    this.pub.asyncUpdate(this.messageKey, params, time);
  }
}

export default Publisher;