import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, isvalid, ...otherProps }) => (
  <div className='group'>
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
    <input  className={`form-input ${isvalid === 'true' ? '' : 'has-error'}`} onChange={handleChange} {...otherProps} />
  </div>
);

export default FormInput;