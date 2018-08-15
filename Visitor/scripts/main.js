import {
  Monkey,
  Lion,
  Dolphin
} from './Classes.js';
import {
  speak,
  jump
} from './actions.js';

const monkey = new Monkey('Wukong');
const lion = new Lion('Shinba');
const dolphin = new Dolphin('Pipi');

monkey.accept(speak);
lion.accept(speak);
dolphin.accept(speak);

monkey.accept(jump);
lion.accept(jump);
dolphin.accept(jump);