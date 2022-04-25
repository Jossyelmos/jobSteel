import {
    GET_JOBS,
    SEARCH_JOBS,
    CLEAR_JOBS,
    GET_JOB,
    SET_LOADING
} from '../types';

// eslint-disable-next-line
export default (state, action) => {
    switch(action.type) {
        case SEARCH_JOBS:
            return {
                ...state,
                jobs: action.payload,
                loading: false
            }
        case GET_JOBS:
            return {
                ...state,
                jobs: action.payload,
                loading: false
            }
        case CLEAR_JOBS:
            return {
                ...state,
                jobs: [],
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}