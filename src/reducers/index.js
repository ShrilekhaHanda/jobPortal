import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import registerReducers from './registerReducers';
import jobReducers from './jobReducers';
//import userDetail from './userDetail';

const activeUserReducer = (activeUser = null, action) => {
    if(action.type === 'ACTIVE_USER'){
        return action.payload;
    }
    return activeUser;
}
export default combineReducers({
    form: formReducer,
    register: registerReducers,
    jobs: jobReducers,
    user: activeUserReducer
});
