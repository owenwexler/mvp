import React, { useState } from 'react';
import { SearchBox, SearchButton } from '../styles/StyledElements.jsx';

const Search = ({ location, setLocation, setWeatherData }) => {

  return (
    <>
    <SearchBox onChange={e => setLocation(e.target.value)} placeholder="ENTER LOCATION" /> <SearchButton onClick={() => alert('YOOOOOOUUUVE CLIIIIIICKED MEEEEEEEE!  Good!')}>SEARCH</SearchButton>
    </>
  )
}

export default Search;