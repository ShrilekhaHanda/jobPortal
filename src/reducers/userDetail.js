
export const activeUserReducer = (activeUser = null, action) => {
    if(action.type === 'ACTIVE_USER'){
        return action.payload;
    }
    return activeUser;
}