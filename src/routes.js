/* eslint-disable global-require */
import React from 'react';
import {Route} from 'react-router';

import Home from './pages/home/HomeContainer';
import Login from './pages/login/LoginContainer';
import User from './pages/user/UserContainer';
import Register from './pages/register/RegisterContainer';
import Addword from './pages/addword/AddwordContainer';

export default (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Open Dictionary</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/user">User</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/addword">Addword</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/register">Register</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sign Out</a>
              </li>
            </ul>
          </div>
        </nav>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/user" component={User}/>
        <Route exact path="/register" component={Register}/>
    </div>
);
