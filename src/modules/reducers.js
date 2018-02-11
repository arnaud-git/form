import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { appReducer } from './App';
import { navReducer } from './Nav';

const rootReducer = combineReducers({
  app: appReducer,
  nav: navReducer,
  form: formReducer,
});

export default rootReducer;
