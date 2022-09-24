import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { getPostsRequest } from './actions/posts';
import { getUsersRequest } from './actions/users';

const middleware = [thunk];

const store = createStore(reducers, applyMiddleware(...middleware));

store.dispatch(getUsersRequest());
store.dispatch(getPostsRequest());

export default store;
