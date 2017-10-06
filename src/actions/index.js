
export const SHOW_RESULTS = 'SHOW_RESULTS';

export function showResults(setting) {
    return {
        type: 'SHOW_RESULTS',
        voted: setting
    };

}
