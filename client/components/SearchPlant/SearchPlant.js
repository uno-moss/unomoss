import React from 'react';
import SearchBarInput from './SearchBarInput';

const SearchPlant = () => {
  return (
    <div>
      <header>Search for plants</header>
      <SearchBarInput initialSearch="hello" />
    </div>
  );
};

export default SearchPlant;
