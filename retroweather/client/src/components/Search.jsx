import React, { useState } from 'react';
import { SearchBox, SearchButton } from '../styles/StyledElements.jsx';

const Search = ({ location, setLocation, getWeatherDataFromAPI }) => {

  const handleClick = (e) => {
    getWeatherDataFromAPI(location);
    setLocation('');
    e.preventDefault();
  }

  return (
    <>
    <SearchBox onChange={e => setLocation(e.target.value)} value={location} placeholder="ENTER LOCATION" /> <SearchButton onClick={handleClick}>SEARCH</SearchButton>
    </>
  )
}

export default Search;