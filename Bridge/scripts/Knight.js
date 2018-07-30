import Enemy from './Enemy.js';

export default class Knight extends Enemy{
  constructor(armour){
    super(armour);
  }
  addArmour(){
    this.armour.addArmour();
  }
}