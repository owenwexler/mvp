import React, { useState } from 'react';
import { SearchBox, SearchButton } from '../styles/StyledElements.jsx';

const Search = ({ location, setLocation, getWeatherDataFromAPI }) => {

  return (
    <>
    <SearchBox onChange={e => setLocation(e.target.value)} placeholder="ENTER LOCATION" /> <SearchButton onClick={() => getWeatherDataFromAPI(location)}>SEARCH</SearchButton>
    </>
  )
}

export default Search;