import React, {Component} from 'react';
import {connect} from 'react-redux';
//Import css
import './User.css';

import {Link} from 'react-router-dom';

export default class UserContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        var total = 20
        var accepted = 16
        var rejected = 4
        var username="placeholder1"
        var email="placeholder@placeholder.com"
        return (
          <div>
          <div class = "">
          <header>
              <h1 class = "page-name"> Open Dictionary
              <ul class = "nav">
                  <li class = "nav-object"><a href = "#"> Register </a></li>
                  <li class = "nav-object"><a href = "#"> Sign in </a></li>
              </ul>
              </h1>
          </header>
          </div>
              <div className = "body">
                <div class = "userInfo">
                  <h3> Username: {username} </h3>
                  <h3> Email: {email} </h3>
                </div>
                <div class = "ele">
                  <h2> Total Submissions </h2>
                  <br/>
                  <h3> {total} </h3>
                </div>
                <div class = "ele">
                  <h2> Accepted Submissions </h2>
                  <br/>
                  <h3> {accepted} </h3>
                </div>
                <div class = "ele">
                  <h2> Rejected Submissions </h2>
                  <br/>
                  <h3> {rejected} </h3>
                </div>
                <div class = "ele">
                  <h2> Acceptance Rate </h2>
                  <br/>
                  <h3> {100*accepted/total}% </h3>
                </div>
              </div>
            </div>
        )
    }

}
