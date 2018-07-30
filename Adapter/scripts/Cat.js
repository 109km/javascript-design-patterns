export default class Cat{
  constructor(name,color){
    this.name = name;
    this.color = color;
  }
  miaow(){
    console.log(`${this.name} is miaowing.`);
  }
}