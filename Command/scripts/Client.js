export default class Client{
  constructor(invoker){
    this.invoker = invoker;
  }
  send(command){
    this.invoker.submit(command);
  }
}