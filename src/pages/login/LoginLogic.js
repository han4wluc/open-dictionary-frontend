import {createLogic} from 'redux-logic';
import axios from 'axios';

const fetchPollsLogic = createLogic({
    type: 'GET_DATA_REQUEST', // only apply this logic to this type
    cancelType: 'CANCEL_DATA_REQUEST', // cancel on this type
    latest: true, // only take latest
    process({
        getState,
        action
    }, dispatch, done) {
        console.log('requesting')
        axios
            .get('https://survey.codewinds.com/polls')
            .then(resp => resp.data.polls)
            .then(data => dispatch({type: 'FETCH_DATA_REQUEST', payload: data}))
            .catch(err => {
                console.error(err); // log since could be render err
                dispatch({type: 'FETCH_DATA_FAILED', payload: err, error: true})
            })
            .then(() => done());
    }
});

export default[
    fetchPollsLogic
];