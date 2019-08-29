import { connect } from 'react-redux';
import { compose } from 'redux';

import WithSpinner from '../with-spinner/with-spinner.component';
import Campaigns from './campaigns.component';

const mapStateToProps = state => ({
    isCampaignLoading: state.users.isCampaignLoading
})

const CampaignsContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(Campaigns);

export default CampaignsContainer;