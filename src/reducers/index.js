import { combineReducers } from 'redux';
import DataAttributes from './data_attributes';

const rootReducer = combineReducers({
  dataAttributes: DataAttributes
});

export default rootReducer;
