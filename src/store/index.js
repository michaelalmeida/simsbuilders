import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';

const composedEnhancer = composeWithDevTools(applyMiddleware());

const store = createStore(reducer, composedEnhancer);

export default store;
