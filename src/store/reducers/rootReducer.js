import { combineReducers } from 'redux';
import showReducer from './showReducer';

const rootReducer = combineReducers({
  show: showReducer,
});

export default rootReducer;
