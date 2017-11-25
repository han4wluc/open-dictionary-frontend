import React, {Component} from 'react';
import {connect} from 'react-redux';
//Import css
import './Home.css';
//Import assets
import logo from './assets/logo.svg';

import {Link} from 'react-router-dom';

export default class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        )
    }
    
}