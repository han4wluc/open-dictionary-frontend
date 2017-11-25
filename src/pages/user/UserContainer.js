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
        return (
            <div>
                <p>User Profile page</p>
            </div>
        )
    }

}
