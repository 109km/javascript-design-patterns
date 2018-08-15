const speak = {
  visitMonkey(monkey){
    monkey.shout();
  },
  visitLion(lion){
    lion.roar();
  },
  visitDolphin(dolphin){
    dolphin.speak();
  }
}

const jump = {
  visitMonkey(monkey){
    console.log(`${monkey.name} is jumping.`);
  },
  visitLion(lion){
    console.log(`${lion.name} is jumping.`);
  },
  visitDolphin(dolphin){
    console.log(`${dolphin.name} is jumping.`);
  }
}

export {
  speak,
  jump
};
