class Person{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  getName(){
    return this.name;
  }
  getAge(){
    return this.age;
  }
}

export default class PersonFactory{
  create(name,age){
    return new Person(name,age);
  }
}
