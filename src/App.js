import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import './App.scss';



import {default as Campaigns} from './components/campaigns/campaigns.container';
import SearchBox from './components/search-box/search-box.component';
import FormInput from './components/form-input/form-input.component';

import { fetchUsersStartAsync } from './redux/user.action';
import { filterCampaigns, addCampaign, addCampaignError } from './redux/campaign.action';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchField: '',
      endDateValid: 'true',
      startDateValid: 'true',
      dateInput:{ startDate:'', endDate:'' }
    };
  };
  
  filters = {};

  componentDidMount() {
    window.AddCampaigns = (id, name, startDate, endDate, Budget, userId) => {
      if(moment(startDate).isAfter(moment(endDate))) {
        this.props.addCampaignError();
      }
      else {
        this.props.addCampaign({
          id,
          name,
          startDate: moment(startDate).format('MM/DD/YYYY'),
          endDate: moment(endDate).format('MM/DD/YYYY'),
          Budget,
          userId
        });
      }
      
    };
    const { fetchUsersStartAsync } = this.props;
    fetchUsersStartAsync();
  }

  handleChange = event => {
    const { value, name } = event.target;
   
      if(this.state.dateInput.startDate !== '' && moment(value).isBefore(moment(this.state.dateInput.startDate))) { 
        this.setState({ endDateValid: 'false' });
      }
      else {
        this.setState({ endDateValid: 'true' });
        this.setState({dateInput:{...this.state.dateInput, [name]: value }});
        this.filters[name] = value;
        this.props.filterCampaigns(this.filters);
      }
    
  };

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
    const { filterCampaigns } = this.props;
    this.filters.searchText = event.target.value;
    filterCampaigns(this.filters);
  };

  render() {
    const { campaigns, users } = this.props; 
    
    const { startDate, endDate } = this.state.dateInput;
    const { endDateValid, startDateValid } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h2> Filter Campaigns </h2>
          <FormInput
              name='startDate'
              type='date'
              handleChange={this.handleChange}
              value={startDate}
              label='Start Date'
              placeholder='Start Date'
              isvalid={startDateValid}
            />
          <FormInput
              name='endDate'
              type='date'
              handleChange={this.handleChange}
              value={endDate}
              label='End Date'
              placeholder='End Date'
              isvalid={endDateValid}
            />
          <SearchBox onSearchChange={this.onSearchChange} />
        </div>
          {
            campaigns.error ? <span>{campaigns.error}</span> : <Campaigns campaigns={campaigns.filteredCampaigns} userMap={users.users}/>
          }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  campaigns: state.campaigns,
  users: state.users
})

const mapDispatchToProps = dispatch => ({
  fetchUsersStartAsync: () => dispatch(fetchUsersStartAsync()),
  filterCampaigns: (filters) => dispatch(filterCampaigns(filters)),
  addCampaign: (campaign) => dispatch(addCampaign(campaign)),
  addCampaignError: () => dispatch(addCampaignError())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
