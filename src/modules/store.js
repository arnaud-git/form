import { createStore } from 'redux';
import reducers from 'formAtion/src/modules/reducers';

export default () => createStore(reducers);
