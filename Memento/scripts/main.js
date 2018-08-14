import Editor from './Editor.js';

const editor = new Editor();
editor.input('hello');
editor.input(',world');

const memo1 = editor.save();
console.log(editor.getContent());

editor.input('!!!!');
console.log(editor.getContent());

editor.restore(memo1);
console.log(editor.getContent());