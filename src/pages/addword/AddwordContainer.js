import React, {Component} from 'react';
import {connect} from 'react-redux';
//Import css
import './Addword.css';
//Import assets
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
        // this.props.logic("GET_DATA_REQUEST", {})
    }

    render() {
        // console.log(this.props.home);
        return (
            <div class = "">
            
              <input type="text" name="email"/><br/>
              <input type="text" name="email"/><br/>
              <input type="text" name="email"/>

            </div>
        )
    }
}

// Retrieve data from store as props
function mapStateToProps(store) {
    return {
        state: store.addword
    };
}

export default connect(mapStateToProps, {
    logic: (type, payload)=>{
        return {type, payload}
    }
})(HomeContainer);
