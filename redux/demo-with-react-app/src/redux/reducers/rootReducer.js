import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { usersReducer } from './usersReducer';
import { todoReducer } from './todoReducer';

const rootReducer = combineReducers({
  loginReducer,
  usersReducer,
  todoReducer,
});

export default rootReducer;
