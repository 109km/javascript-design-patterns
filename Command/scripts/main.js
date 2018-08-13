import Client from './Client.js';
import {
  MakeFoodCommand,
  MakeDrinkCommand
} from './Command.js';
import Invoker from './Invoker.js';
import Receiver from './Receiver.js';


const invoker = new Invoker();
const client = new Client(invoker);
const receicer = new Receiver();

client.send(new MakeDrinkCommand(receicer));
client.send(new MakeFoodCommand(receicer));