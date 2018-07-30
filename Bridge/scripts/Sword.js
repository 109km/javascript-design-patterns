import Weapon from './Weapon.js';

export default class Sword extends Weapon{
  constructor(){
    super();
  }
  addWeapon(){
    console.log(`Sword is added.`);
  }
}