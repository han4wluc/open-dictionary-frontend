import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withCookies} from 'react-cookie';
//Import css
import './Login.css';

import {Link} from 'react-router-dom';

export class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <p>Login page</p>
                <input placeholder={'username'}></input> <br/>
                <input placeholder={'password'}></input> <br/>
                <button>{'Login'}</button>
            </div>
        )
    }
    
}

// Retrieve data from store as props
function mapStateToProps(store) {
    return {login: store.login};
}

export default connect(mapStateToProps, {
    logic: (type, payload) => {
        return {type, payload}
    }
})(withCookies(LoginContainer));