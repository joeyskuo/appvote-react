import { combineReducers } from 'redux';
import { SHOW_RESULTS } from '../actions';

function voted(state = {}, action) {

    switch (action.type){
        case SHOW_RESULTS:
            console.log(`Action emitted with value: ${action.voted}`);
            return action.voted;
        default:
            return state;
    }
}

export default combineReducers({ voted });
