import {
  Bank,
  Alipay,
  Wechat
} from './Account.js';

const bank = new Bank(100);
const alipay = new Alipay(500);
const wechat = new Wechat(1000);

bank.setNext(alipay);
alipay.setNext(wechat);

bank.pay(1024);