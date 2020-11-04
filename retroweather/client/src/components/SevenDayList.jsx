import React from 'react';
import SevenDayListEntry from './SevenDayListEntry.jsx';

const SevenDayList = ({ sevenDayForecast }) => {
  return (
    <>
      <h2 style={{textAlign: 'center', marginTop: '20px', marginBottom: '20px'}}>SEVEN-DAY FORECAST</h2>
      {sevenDayForecast.map((day, index) => {
        return <SevenDayListEntry key={index} dayData={day} />
      })}
    </>
  )
}

export default SevenDayList;