import EditorMemory from './EditorMemory.js';
export default class Editor {
  constructor() {
    this.content = '';
  }
  input(word){
    this.content = this.content + word;
  }
  getContent(){
    return this.content;
  }
  save(){
    return new EditorMemory(this.content);
  }
  restore(memo){
    this.content = memo.getContent();
  }
}