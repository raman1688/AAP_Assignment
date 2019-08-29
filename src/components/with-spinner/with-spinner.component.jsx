import React from 'react';

import './with-spinner.styles.scss';

const WithSpinner = WrappedComponent => {
  const Spinner = ({ isCampaignLoading, ...otherProps }) => {
    return isCampaignLoading ? (
      <div className="SpinnerOverlay">
        <div className="SpinnerContainer"></div>
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;