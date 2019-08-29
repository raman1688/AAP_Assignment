import ActionTypes from './action.types';
import { CAMPAIGNS_DATA } from '../campaigns.data';
import { filterCampaign, addCampaign } from './campaign.utils';

const INITIAL_STATE = {
    campaigns: CAMPAIGNS_DATA,
    filteredCampaigns: CAMPAIGNS_DATA,
    error: null
};
const campaignReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ActionTypes.FILTER_CAMPAIGNS:
            return {
                ...state,
                filteredCampaigns: filterCampaign(action.payload, state.campaigns),
                error: null
            }
        case ActionTypes.ADD_CAMPAIGN:
            return {
                ...state,
                campaigns: addCampaign(action.payload, state.campaigns),
                filteredCampaigns: addCampaign(action.payload, state.campaigns),
                error: null
            }
        case ActionTypes.ADD_CAMPAIGN_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default campaignReducer;