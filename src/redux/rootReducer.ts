import { combineReducers } from 'redux';
import mainPageReducer from './mainPageReducer';
import filmPageReducer from './filmPageReducer';

const rootReducer = combineReducers({
  mainPage: mainPageReducer,
  filmPage: filmPageReducer,
});

export default rootReducer;
