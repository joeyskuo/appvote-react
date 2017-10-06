import { combineReducers } from 'redux';
import { SHOW_RESULTS } from '../actions';

function voted(state = {}, action) {

    switch (action.type){
        case SHOW_RESULTS:
            return action.voted;
        default:
            return state;
    }
}

export default combineReducers({ voted });
