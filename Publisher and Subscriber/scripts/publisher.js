class Publisher {
  constructor(messageKey, pub) {
    this.messageKey = messageKey;
    this.pub = pub;
  }
  notify(params) {
    this.pub.update(this.messageKey, params);
  }
}

export default Publisher;