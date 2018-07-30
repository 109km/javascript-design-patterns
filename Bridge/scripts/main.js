import Archer from './Archer.js';
import Knight from './Knight.js';
import LightArmour from './LightArmour.js';
import HeavyArmour from './HeavyArmour.js';


var lightArm = new LightArmour();
var arc = new Archer(lightArm);
arc.addArmour();


var heavyArm = new HeavyArmour();
var knight = new Knight(heavyArm);
knight.addArmour();