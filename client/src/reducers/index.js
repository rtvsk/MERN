import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

export default combineReducers({
  item: itemReducer
});

// auth reducer etc..       !*** JUST NOT 4 THIS PROJ ***!