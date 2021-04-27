import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';
import cartReducer from './cart';
import watchesReducer from './watches';
import oneItemReducer from './singleWatches';
import cartHistoryReducer from './cartHistory';
// import filterWatchesReducer from "./filter"

// import cart from './cart'

const reducer = combineReducers({
    auth: auth,
    cart: cartReducer,
    watchesReducer,
    oneItemReducer,
    cartHistoryReducer,
});

const middleware = composeWithDevTools(
    applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './auth';
