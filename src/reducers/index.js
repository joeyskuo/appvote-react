import { combineReducers } from 'redux';
import { SHOW_RESULTS, SET_DATA } from '../actions';

function voted(state = {}, action) {

    switch (action.type){
        case SHOW_RESULTS:
            return action.voted;
        default:
            return state;
    }
}

function voteData(state = {}, action) {

    switch (action.type){
        case SET_DATA:
            return action.voteData;
        default:
            return state;
    }
}

export default combineReducers({ voted, voteData });
