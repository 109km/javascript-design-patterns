export default class Human{
  constructor(name){
    this.name = name;
  }
  touch(animalAdapter){
    console.log(`${this.name} is touching ${animalAdapter.animal.name}.`);
    animalAdapter.calling();
  }
}