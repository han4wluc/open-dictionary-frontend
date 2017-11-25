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
        )
    }

}
