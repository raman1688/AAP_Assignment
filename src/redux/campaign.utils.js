import moment from 'moment';

export const filterCampaign = (filters, campaigns) => {
    let filteredResults = campaigns;
    Object.keys(filters).forEach(function(key) {
        console.log(key, filters[key]);
        if(key === 'searchText') {
            filteredResults = filteredResults.filter(campaign => 
                campaign.name.toLowerCase().includes(filters[key].toLowerCase()) 
            );
        }
        else if(key === 'startDate') {
            const date = moment(filters[key]);
            if(date.isValid()) {
                filteredResults = filteredResults.filter(campaign => 
                moment(campaign.startDate).isAfter(date) 
                );
            }
            
        }
        else if(key === 'endDate') {
            const date = moment(filters[key]);
            if(date.isValid()) {
                filteredResults = filteredResults.filter(campaign => 
                moment(campaign.endDate).isBefore(date) 
                );
            }
        }
    });
    return filteredResults;
} 

export const addCampaign = (campaign, campaigns) => {
    return [...campaigns, campaign];
}
