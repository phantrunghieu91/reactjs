import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { usersReducer } from './usersReducer';
import { todoReducer } from './todoReducer';

const sagaReducer = combineReducers({
  loginReducer,
  usersReducer,
  todoReducer,
});

export default sagaReducer;
