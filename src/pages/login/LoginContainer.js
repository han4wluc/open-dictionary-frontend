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
                <p>Please Log In</p>
                <form>
                  {"Email:"}<br/>
                  <input type="text" name="email"/><br/>
                  Password:<br/>
                  <input type="text" name="password"/>
                </form>
            </div>

        )
    }
<<<<<<< HEAD
    
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
=======

}
>>>>>>> a1c07315f62989411290f42c524c1be15ab20108
