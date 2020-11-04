import React from 'react';

// Container
import {
  SevenDayMainContainer,
  SevenDaySubheaderContainer
} from '../styles/StyledDivs.jsx';

// Text Styles
import {
  SevenDayHeaderText,
  SevenDaySubHeaderH5
} from '../styles/StyledElements.jsx';

// Helpers
import {
  formatDateMMDDYY,
  getPicNameFromCondition
 } from '../helper/helper.js';

const SevenDayListEntry = ({dayData}) => {
  return (
    <>
      <SevenDayMainContainer>
        <img src={`https://retroweather.s3.amazonaws.com/${getPicNameFromCondition(dayData.conditions)}`} height="50" width="50"></img>
        <SevenDayHeaderText>{formatDateMMDDYY(dayData.datetimeStr)}</SevenDayHeaderText>
        <SevenDayHeaderText>LOW: {Math.round(dayData.mint)}º</SevenDayHeaderText>
        <SevenDayHeaderText>HIGH: {Math.round(dayData.maxt)}º </SevenDayHeaderText>
      </SevenDayMainContainer>
      <SevenDaySubheaderContainer>
        <SevenDaySubHeaderH5>WIND SPEED: {Math.round(dayData.wspd)}</SevenDaySubHeaderH5>
        <SevenDaySubHeaderH5>WIND GUST: {Math.round(dayData.wgust)}</SevenDaySubHeaderH5>
        <SevenDaySubHeaderH5>VISIBILITY: {Math.round(dayData.visibility)}
        </SevenDaySubHeaderH5>
        <SevenDaySubHeaderH5>CLOUD COVER: {Math.round(dayData.cloudcover)}</SevenDaySubHeaderH5>
      </SevenDaySubheaderContainer>
      <SevenDaySubheaderContainer>
        <SevenDaySubHeaderH5>HUMIDITY: {Math.round(dayData.humidity)}</SevenDaySubHeaderH5>
        <SevenDaySubHeaderH5>PRECIP: {Math.round(dayData.precip)}</SevenDaySubHeaderH5>
        <SevenDaySubHeaderH5>SNOW: {Math.round(dayData.snow)}</SevenDaySubHeaderH5>
        <SevenDaySubHeaderH5>SNOW DEPTH: {Math.round(dayData.snowdepth)}</SevenDaySubHeaderH5>
      </SevenDaySubheaderContainer>
    </>
  )
}

export default SevenDayListEntry;