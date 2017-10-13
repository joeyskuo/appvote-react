
export const SHOW_RESULTS = 'SHOW_RESULTS';
export const SET_DATA = 'SET_DATA';

export function showResults(setting) {
    return {
        type: 'SHOW_RESULTS',
        voted: setting
    };

}

export function setVoteData(data) {
    return {
        type: 'SET_DATA',
        voteData: data
    };

}
