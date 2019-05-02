import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';

// imports all file except index.ts
const req = require.context('.', true, /^(?!.\/index)(?!.\/__tests__).*.ts$/);

const modules = { };

req.keys().forEach((key) => {
  const regex = /.\/(.*?).ts$/;
  const moduleName = regex.test(key) && key.match(regex)[1];
  modules[moduleName] = req(key).default;
});

modules.pender = penderReducer;

export default combineReducers(modules);
