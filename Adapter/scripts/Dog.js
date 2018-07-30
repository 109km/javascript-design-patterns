export default class Dog{
  constructor(name,color){
    this.name = name;
    this.color = color;
  }
  bark(){
    console.log(`${this.name} is barking.`);
  }
}