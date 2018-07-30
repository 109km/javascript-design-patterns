import Armour from './Armour.js';

export default class HeavyArmour extends Armour{
  constructor(){
    super();
  }
  addArmour(){
    console.log(`HeavyArmour is added.`);
  }
}