import React from 'react';
import moment from 'moment';

import { currencyFormatter } from '../../utils/common-utils';

import './campaigns.style.scss';

const Campaigns = ({campaigns, userMap}) => {
    return (
        userMap && 
        <div className="container-fluid" style={{marginTop: 10}}>
            <div className="table-row header">
                <div className="wrapper">
                    <div className="table-col">Name</div>
                    <div className="table-col">User Name</div>
                    <div className="table-col">Start Date</div>
                    <div className="table-col">End Date</div>
                    <div className="table-col">Active</div>
                    <div className="table-col">Budget</div>
                </div>              
            </div>

            {campaigns.map((campaign)=>(
                
                    moment(campaign.startDate).isBefore(moment(campaign.endDate)) &&
                    <div key={campaign.id} className="table-row">
                        <div className="wrapper">
                            <div className="table-col">{campaign.name}</div>
                            <div className="table-col">{userMap[campaign.userId]? userMap[campaign.userId]: 'Unknown user' }</div>
                            <div className="table-col">{campaign.startDate}</div>
                            <div className="table-col">{campaign.endDate}</div>
                            <div className="table-col">
                                { moment(new Date()).isBetween(campaign.startDate, campaign.endDate) ?
                                    <span className="active">Active</span>
                                    :
                                    <span className="inactive">InActive</span>
                                }
                            </div>
                            <div className="table-col">{currencyFormatter(campaign.Budget)}</div>
                        </div>              
                    </div>
                
                
            ))}
            
        </div>
    )
}

export default Campaigns;