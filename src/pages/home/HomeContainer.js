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
        console.log(this.props);
        // this.props.dispatch({type: 'GET_DATA_REQUEST'})
        // this.props.dispatch(()=>{
        //     return {
        //         type : "GET_DATA_REQUEST",
        //         payload: {

        //         }
        //     }
        // })
        this.props.logic("GET_DATA_REQUEST", {})
    }

    render() {
        console.log(this.props.home);
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