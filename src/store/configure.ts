import { createStore, applyMiddleware, compose } from 'redux';
import penderMiddleware from 'redux-pender';
import modules from './modules';

const isDev = process.env.NODE_ENV === 'development';
const devTools = isDev && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devTools || compose;
const middlewares = [
  penderMiddleware(),
];

const configure = ( preloadedState: any ) => createStore(
  modules,
  preloadedState,
  composeEnhancers(applyMiddleware(...middlewares)),
);

export default configure;
