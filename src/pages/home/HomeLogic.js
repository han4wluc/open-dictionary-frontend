import {createLogic} from 'redux-logic';
import axios from 'axios';

const homeLogic = createLogic({
    type: 'GET_DATA_REQUEST', // only apply this logic to this type
    cancelType: 'CANCEL_FETCH_POLLS', // cancel on this type
    latest: true, // only take latest
    process({
        getState,
        action
    }, dispatch, done) {
        axios
            .get('https://survey.codewinds.com/polls')
            .then(polls => dispatch({type: 'SET_DATA', payload: polls}))
            .catch(err => {
                console.error(err); // log since could be render err
                dispatch({type: 'FETCH_POLLS_FAILED', payload: err, error: true})
            })
            .then(() => done());
    }
});

export default[homeLogic];