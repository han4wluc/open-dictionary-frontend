import {createLogic} from 'redux-logic';
import axios from 'axios';

const LoginLogic = createLogic({
    type: 'LOGIN_REQUEST', // only apply this logic to this type
    cancelType: 'CANCEL_LOGIN_REQUEST', // cancel on this type
    latest: true, // only take latest
    process({
        getState,
        action
    }, dispatch, done) {
        const { email, password } = action.payload;
        console.log('login with', email, password);

        // axios
        //     .post('')
        //     .then(data => dispatch({type: 'LOGIN_SUCCESS', payload: data}))
        //     .catch(err => {
        //         console.error(err); // log since could be render err
        //         dispatch({type: 'LOGIN_FAILED', payload: err, error: true})
        //     })
        //     .then(() => done());
    }
});

export default[
    LoginLogic
];