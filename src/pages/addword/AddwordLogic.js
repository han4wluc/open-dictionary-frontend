import {createLogic} from 'redux-logic';
import axios from 'axios';

const homeLogic = createLogic({
    type: 'ADDWORD_DATA_REQUEST', // only apply this logic to this type
    cancelType: 'CANCEL_FETCH_POLLS', // cancel on this type
    latest: true, // only take latest
    process({
        getState,
        action
    }, dispatch, done) {
        

    }
});

export default[homeLogic];