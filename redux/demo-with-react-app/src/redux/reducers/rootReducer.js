import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { usersReducer } from "./usersReducer";

const rootReducer = combineReducers({
    loginReducer,
    usersReducer
});

export default rootReducer;