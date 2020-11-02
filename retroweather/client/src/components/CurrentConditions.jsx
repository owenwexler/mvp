import React from 'react';

// Container

import { CurrentConditionContainer } from '../styles/StyledDivs.jsx';
import { CurrentConditionDateWeatherLogo } from '../styles/StyledElements.jsx';

// Helpers
import { formatDateMMDDYY } from '../helper/helper.js';

const CurrentConditions = ({currentConditions}) => {
  return (
    <>
      <CurrentConditionContainer>
        <img src="https://retroweather.s3.amazonaws.com/clear.png" height="200" width="200"></img>
        <CurrentConditionDateWeatherLogo>{formatDateMMDDYY(currentConditions.datetime)}</CurrentConditionDateWeatherLogo>
        <CurrentConditionDateWeatherLogo>{currentConditions.temp}º</CurrentConditionDateWeatherLogo>
        <h5>MORE HERE</h5>
      </CurrentConditionContainer>
    </>
  )
}

export default CurrentConditions;