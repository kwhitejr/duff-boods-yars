import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import authReducer from 'reducers/auth_reducer';
import todo from 'reducers/todo';

const rootReducer = combineReducers({
  auth: authReducer,
  todo,
  routing,
});

export default rootReducer;
