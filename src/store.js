/**
 * Main store function
 */
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';
// import thunk from 'redux-thunk';


export function configureStore(initialState = {}) {
    // Middleware and store enhancers
    const enhancers = [];

    const middleware = [];

    enhancers.push(...middleware);

    const store = createStore(reducers, initialState, compose(...enhancers));

    return store;
}
