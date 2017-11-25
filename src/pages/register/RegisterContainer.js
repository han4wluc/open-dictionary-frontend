import React, {Component} from 'react';
import {connect} from 'react-redux';
//Import css
import './Register.css';

import {Link} from 'react-router-dom';

export default class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <p>Login page</p>
            </div>
        )
    }

}
