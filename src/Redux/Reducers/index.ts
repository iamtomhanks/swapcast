// Modules
import { combineReducers } from 'redux';

// Reducers
import { userReducer as user } from './user';
import { roomReducer as room } from './room';
import { requestsReducer as requests } from './requests';

export default combineReducers({
  user,
  room,
  requests,
});