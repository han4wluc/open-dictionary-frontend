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
            email: '',
            password: ''
        };
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        console.log(this.props);
    }

    login(e) {
        const { email, password } = this.state;
        e.preventDefault();
        
        this.props.logic("LOGIN_REQUEST", {
            email,
            password
        });
    }

    onChange(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const { email, password } = this.state;
        return (
            <div>
                <p>Please Log In</p>
                <form onSubmit={this.login}>
                  {"Email:"}<br/>
                  <input type="text" name="email" value={email} onChange={this.onChange}/><br/>
                  Password:<br/>
                  <input type="password" name="password" value={password} onChange={this.onChange}/>
                  <button type="submit">Login</button>
                </form>
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
