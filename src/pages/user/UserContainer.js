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
        var acceptanceRate = accepted/total
        var username="placeholder1"
        var email="placeholder@placeholder.com"
        return (
          <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="#">Page Title</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Sign Out</a>
                  </li>
                </ul>
              </div>
            </nav>
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
                  <h3> {100*acceptanceRate} % </h3>
                </div>
              </div>
            </div>
        )
    }

}
