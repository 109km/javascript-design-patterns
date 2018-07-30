export default class Enemy{
  constructor(armour,weapon){
    this.armour = armour;
    this.weapon = weapon;
  }
  addArmour(){
    this.armour.addArmour();
    return this;
  }
  addWeapon(){
    this.weapon.addWeapon();
    return this;
  }
}