export default class Person{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  walk(){
    console.log(`${this.name} is walking`);
    return this;
  }
  jump(){
    console.log(`${this.name} is walking`);
    return this;
  }
  speak(){
    console.log(`${this.name} is speaking`);
    return this;
  }
}
