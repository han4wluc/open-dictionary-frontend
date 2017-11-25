// Import Actions
import {createReducer} from '../../helperMethods';

// Initial State
const initialState = {
    //Add States Here
};

export default createReducer(initialState, {
    SET_DATA: (state, payload, action) => {
        return {
            ...state,
            ...action.payload.data
        }
    }
});
