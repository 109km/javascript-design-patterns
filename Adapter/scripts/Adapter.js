export class CatAdapter {
  constructor(cat) {
    this.animal = cat;
  }
  calling() {
    this.animal.miaow();
  }
}

export class DogAdatper {
  constructor(dog) {
    this.animal = dog;
  }
  calling() {
    this.animal.bark();
  }
}