import ActionTypes from './action.types';

export const fetchUsersStart = () => ({
    type: ActionTypes.FETCH_USERS_START
});

export const fetchUsersSuccess = (usersMap) => ({
    type: ActionTypes.FETCH_USERS_SUCCESS,
    payload: usersMap
});

export const fetchUsersFailure = (errorMessage) => ({
    type: ActionTypes.FETCH_USERS_FAILURE,
    payload: errorMessage
})

export const fetchUsersStartAsync = () => {
    return dispatch => {
        
        dispatch(fetchUsersStart());
        try {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                const usersMap = users.reduce((obj, user) => Object.assign(obj, { [user.id]: user.username }), {})
                dispatch(fetchUsersSuccess(usersMap));
            }); 
        } catch (error) {
            dispatch(fetchUsersFailure(error.message))
        }
        
    }
}