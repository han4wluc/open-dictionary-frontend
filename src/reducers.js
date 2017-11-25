/**
 * Root Reducer
 */
import {combineReducers} from 'redux';

// Import Reducers
import home from './pages/home/HomeReducer';
import login from './pages/login/LoginReducer';

// Combine all reducers into one root reducer
export default combineReducers({home, login});
