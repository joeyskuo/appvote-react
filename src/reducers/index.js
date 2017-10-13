import { combineReducers } from 'redux';
import { SHOW_RESULTS, SET_DATA } from '../actions';

function voted(state = {}, action) {

    switch (action.type){
        case SHOW_RESULTS:
            console.log(`Action emitted with value: ${action.voted}`);
            return action.voted;
        default:
            return state;
    }
}

function voteData(state = {}, action) {

    switch (action.type){
        case SET_DATA:
            console.log(`Action emitted with value: ${action.voteData}`);
            return action.voteData;
        default:
            return state;
    }
}

export default combineReducers({ voted, voteData });
