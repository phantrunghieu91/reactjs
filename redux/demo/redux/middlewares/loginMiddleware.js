import { Router } from "next/router";
import { LoginSuccess, LoginFail } from "../actions/loginAction";
import { login } from '../types';

const loginMiddleware = (store) => (next) => (action) => {
    console.log("Dispatching: ", action);
    if(action.type === login.REQUEST) {
        console.log('testing...');
        if(action.user.email === 'admin@gmail.com' && action.user.password === 'letmein') {
            next(LoginSuccess(action.user));
        } else {
            next(LoginFail('Email or password is wrong!'));
        }
    }
}

export default loginMiddleware;