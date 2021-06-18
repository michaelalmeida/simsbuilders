import { combineReducers } from 'redux';

import { userReducer } from './user';
import { contractReducer } from './contract';

const rootReducer = combineReducers({
    user: userReducer,
    contract: contractReducer,
});

export default rootReducer;
