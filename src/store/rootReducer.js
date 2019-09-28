import { combineReducers } from 'redux';

import { reducer as faces } from 'modules/faces';
import { reducer as user } from 'modules/user';


const appReducer = combineReducers({
  [faces.name]: faces.reducer,
  [user.name]: user.reducer,
});


export default appReducer;
