import React, { useState } from 'react';
import { SearchBox, SearchButton } from '../styles/StyledElements.jsx';

const Search = ({ location, setLocation, getWeatherDataFromAPI }) => {

  const setWeatherData = (event) => {
    getWeatherDataFromAPI(location);
    setLocation('');
    event.preventDefault();
  }

  const handleClick = (e) => {
    setWeatherData(e);
  }

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      setWeatherData(e);
    }
  }

  return (
    <>
    <SearchBox onChange={e => setLocation(e.target.value)} value={location} placeholder="ENTER LOCATION" onKeyDown={handleEnterPress}/> <SearchButton onClick={handleClick}>SEARCH</SearchButton>
    </>
  )
}

export default Search;