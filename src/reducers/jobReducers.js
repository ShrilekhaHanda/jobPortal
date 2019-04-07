import _ from 'lodash';
import { CREATE_JOB, FETCH_JOBS } from '../actions/types';

export default(state = {}, action) => {
    switch(action.type){
        case CREATE_JOB:
            return {...state, [action.payload.id]: action.payload };
        case FETCH_JOBS: 
            return { ...state, ..._.mapKeys(action.payload, 'id')};
        default:
            return state;
    }
}