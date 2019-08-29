import ActionTypes from './action.types';

const INITIAL_STATE = {
    users: null,
    error: null,
    isCampaignLoading: true
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ActionTypes.FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                isCampaignLoading: false,
                error: null
            }
        case ActionTypes.FETCH_USERS_FAILURE:
            return {
                ...state,
                users: null,
                isCampaignLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;