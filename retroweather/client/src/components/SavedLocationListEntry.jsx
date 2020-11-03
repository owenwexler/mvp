import React from 'react';

import {
  SavedLocationEntryStyle
} from '../styles/StyledElements.jsx'

const SavedLocationListEntry = ({ entry, setLocation, getWeatherDataFromAPI }) => {

  const handleClick = (e) => {
    getWeatherDataFromAPI(entry);
    setLocation('');
    e.preventDefault();
  }

  if (entry === undefined) {
    return null
  } else {
    return (
      <SavedLocationEntryStyle onClick={handleClick}>{entry}</SavedLocationEntryStyle>
    )
  }
}

export default SavedLocationListEntry;