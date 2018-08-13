export class Iterator {
  constructor() {
    this.list = [];
  }
  add(item) {
    if (this.find(item)){
      throw new TypeError(`This id:${item.id} has already been used.`);
    }
    this.list.push(item);
  }
  find(toFindItem){
    return this.list.find((item)=>{
      return item.id === toFindItem.id;
    });
  }
  remove(toRemoveItem) {
    const id = toRemoveItem.id;
    this.list = this.list.filter(item => {
      return  item.id !== id;
    });
  }
  getList(){
    return this.list;
  }
}

export class Item{
  constructor(id){
    this.id = id;
  }
  getId(){
    return this.id;
  }
}