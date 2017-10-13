
export const SHOW_RESULTS = 'SHOW_RESULTS';
export const GET_DATA = 'GET_DATA';

export function showResults(setting) {
    return {
        type: 'SHOW_RESULTS',
        voted: setting
    };

}

export function getVoteData(data) {
    return {
        type: 'GET_DATA',
        voteData: data
    };

}
