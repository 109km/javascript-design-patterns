import {
  WebBuilder,
  AppBuilder
} from './Builder.js';

const web = new WebBuilder();
web.build();

const app = new AppBuilder();
app.build();