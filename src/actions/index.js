import register from '../api/register';
import { CREATE_REGISTER, FETCH_STREAMS, CREATE_JOB, FETCH_JOBS } from './types';

// export const login = () => {
//     console.log("action creator");
//     return {
//         type: LOG_IN,
//         payload: false
//     }
// }

export const createRegister = (formValues) => async dispatch => {
    const response = await register.post('/register', formValues);

    dispatch({ type: CREATE_REGISTER, payload: response.data});
};

export const fetchStreams = () => async (dispatch) => {
    const response = await register.get('/register');

    dispatch({ type: FETCH_STREAMS, payload: response.data });
}



export const createJob = formValues => async dispatch => {
    const response = await register.post('/jobs', formValues);

    dispatch({ type: CREATE_JOB, payload: response.data});
}

export const fetchJob = () => async dispatch => {
    const response = await register.get('/jobs');
    dispatch({ type: FETCH_JOBS, payload: response.data})
}

export const activeUser = user => {
    return {
        type: 'ACTIVE_USER',
        payload: user
    }
}