import { combineReducers } from 'redux';

import userReducer from './user.reducer';
import campaignReducer from './campaign.reducer';

const rootReducer = combineReducers({
    users: userReducer,
    campaigns: campaignReducer
});

export default rootReducer;