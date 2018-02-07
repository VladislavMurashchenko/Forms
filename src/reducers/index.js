import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import formsInfo from './formsInfo';
import currentFormData from './currentFormData';

export default combineReducers({
  routing: routerReducer,
  formsInfo,
  currentFormData
});
