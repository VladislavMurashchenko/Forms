import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import formsInfo from './formsInfo';

export default combineReducers({
  routing: routerReducer,
  formsInfo
});
