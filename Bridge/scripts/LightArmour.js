import Armour from './Armour.js';

export default class LightArmour extends Armour{
  constructor(){
    super();
  }
  addArmour(){
    console.log(`Light armour is added.`);
  }
}