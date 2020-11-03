import React from 'react';

// Container
import { CurrentConditionContainer } from '../styles/StyledDivs.jsx';

// Text Styles
import { SevenDayHeaderText } from '../styles/StyledElements.jsx';

// Helpers
import {
  formatDateMMDDYY,
  getPicNameFromCondition
 } from '../helper/helper.js';

const SevenDayListEntry = ({dayData}) => {
  return (
    <>
      <CurrentConditionContainer>
        <img src={`https://retroweather.s3.amazonaws.com/${getPicNameFromCondition(dayData.conditions)}`} height="50" width="50"></img>
        <SevenDayHeaderText>{formatDateMMDDYY(dayData.datetimeStr)}</SevenDayHeaderText>
        <SevenDayHeaderText>LOW: {Math.round(dayData.mint)}º</SevenDayHeaderText>
        <SevenDayHeaderText>HIGH: {Math.round(dayData.maxt)}º </SevenDayHeaderText>
      </CurrentConditionContainer>
    </>
  )
}

export default SevenDayListEntry;