/**
 * Root Component
 */
import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import './App.css';

// Import Routes
import routes from './routes';

const history = createBrowserHistory();

export default function App(props) {
  return (
    <Provider store={props.store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>
  );
}
