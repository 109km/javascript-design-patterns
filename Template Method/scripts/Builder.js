class Builder{
  build(){
    this.design();
    this.develop();
    this.test();
    this.publish();
  }
}

export class WebBuilder extends Builder{
  design(){
    console.log(`Designing a web.`);
  }
  develop(){
    console.log(`Web is being developed.`);
  }
  test(){
    console.log(`Web is being tested.`);
  }
  publish(){
    console.log(`Web has been published.`);
  }
}

export class AppBuilder extends Builder{
  design(){
    console.log(`Designing an app.`);
  }
  develop(){
    console.log(`App is being developed.`);
  }
  test(){
    console.log(`App is being tested.`);
  }
  publish(){
    console.log(`App has been published.`);
  }
}