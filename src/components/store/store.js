import { applyMiddleware, compose, createStore } from 'redux';
//import { logger } from 'redux-logger';
//import { thunk } from 'redux-thunk';
//import { promise } from 'redux-promise-middleware';

import gameReducer from '../reducer/reducer';

/* add multiplle reducers and middleware
const middleware = applyMiddleware(promise(), thunk, logger());
store.subscribe(() => {
     console.log("Store changed: " + store.getState());
});
*/

export function configureStore(initialState) {
 
  const store = createStore(gameReducer, initialState);
  return store;
}
