import { combineReducers } from 'redux';
import getEventsReducer from './getEventsReducer';

export default combineReducers({
  events: getEventsReducer
});
