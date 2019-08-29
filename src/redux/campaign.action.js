import ActionTypes from './action.types';

export const filterCampaigns = (filters) => ({
    type: ActionTypes.FILTER_CAMPAIGNS,
    payload: filters
});

export const addCampaign = (campaign) => ({
    type: ActionTypes.ADD_CAMPAIGN,
    payload: campaign
});

export const addCampaignError = () => ({
    type: ActionTypes.ADD_CAMPAIGN_ERROR,
    payload: 'Dates are invalid !!'
});
