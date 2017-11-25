/**
 * Main store function
 */
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';
import {createLogicMiddleware} from 'redux-logic';
import Logics from './logic';

const logicMiddleware = createLogicMiddleware(Logics);

export function configureStore(initialState = {}) {
    // Middleware and store enhancers
    
    const middleware = applyMiddleware(
        logicMiddleware
    );

    const enhancer = middleware;

    const store = createStore(reducers, initialState, enhancer);

    return store;
}
