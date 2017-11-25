/* eslint-disable global-require */
import React from 'react';
import {Route} from 'react-router';

import Home from './pages/home/HomeContainer';
import Login from './pages/login/LoginContainer';

export default (
    <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
    </div>
);
