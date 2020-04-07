// Modules
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import reducer from '../Reducers';

export default createStore(reducer, (() => {
  return applyMiddleware(thunk);
})());


