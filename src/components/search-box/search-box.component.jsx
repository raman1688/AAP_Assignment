import React from 'react';

import './search-box.style.scss';

const SearchBox = props => (
  <input
    className='search-box'
    type='search'
    placeholder='Search by name'
    onChange={props.onSearchChange}
  />
);

export default SearchBox;