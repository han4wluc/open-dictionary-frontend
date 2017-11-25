import React, {Component} from 'react';
import {connect} from 'react-redux';
//Import css
import './Home.css';
//Import assets
import logo from './assets/logo.svg';

import {Link} from 'react-router-dom';

export class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.props.logic("GET_DATA_REQUEST", {})
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

// Retrieve data from store as props
function mapStateToProps(store) {
    return {
        home: store.home
    };
}

export default connect(mapStateToProps, {
    logic: (type, payload)=>{
        return {type, payload}
    }
})(HomeContainer);
