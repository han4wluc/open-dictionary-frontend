// Import Actions
import {createReducer} from '../../helperMethods';

// Initial State
const initialState = {
    //Add States Here
};

export default createReducer(initialState, {
    GET_DATA_REQUEST: (state, payload, action) => {
        return {
            ...state,
            data: payload.value
        }
    }
});
