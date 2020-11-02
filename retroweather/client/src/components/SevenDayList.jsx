import React from 'react';
import SevenDayListEntry from './SevenDayListEntry.jsx';

const SevenDayList = ({ sevenDayForecast }) => {
  return (
    <>
      <h2 style={{textAlign: 'center'}}>SEVEN-DAY FORECAST</h2>
      <SevenDayListEntry></SevenDayListEntry>
      <SevenDayListEntry></SevenDayListEntry>
      <SevenDayListEntry></SevenDayListEntry>
      <SevenDayListEntry></SevenDayListEntry>
    </>
  )
}

export default SevenDayList;