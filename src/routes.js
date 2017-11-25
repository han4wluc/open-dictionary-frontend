/* eslint-disable global-require */
import React from 'react';
import {Route} from 'react-router';

import Home from './pages/home/HomeContainer';
import Login from './pages/login/LoginContainer';
import User from './pages/user/UserContainer';

export default (
    <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/user" component={User}/>
    </div>
);
