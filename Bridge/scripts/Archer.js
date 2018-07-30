import Enemy from './Enemy.js';

export default class Archer extends Enemy{
  constructor(armour){
    super(armour);
  }
  addArmour(){
    this.armour.addArmour();
  }
}