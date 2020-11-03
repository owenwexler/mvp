import React from 'react';

import {
  SavedLocationContainer
} from '../styles/StyledDivs.jsx';

import SavedLocationListEntry from './SavedLocationListEntry.jsx';

const SavedLocationList = ({savedLocations, setLocation, getWeatherDataFromAPI}) => {
  if (savedLocations === null) {
    return null;
  } else {
    return (
      <SavedLocationContainer>
        {savedLocations.map((entry, index) => {
          return <SavedLocationListEntry key={index}entry={entry} setLocation={setLocation} getWeatherDataFromAPI={getWeatherDataFromAPI}/>
        })}
      </SavedLocationContainer>
    )
  }
}

export default SavedLocationList;