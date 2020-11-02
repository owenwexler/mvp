import React from 'react';

// Container

import { CurrentConditionContainer } from '../styles/StyledDivs.jsx';
import { SevenDayHeaderText } from '../styles/StyledElements.jsx';

const SevenDayListEntry = () => (
  <>
    <CurrentConditionContainer>
      <img src={`https://retroweather.s3.amazonaws.com/clear.png`} height="50" width="50"></img>
      <SevenDayHeaderText>01/01/1980</SevenDayHeaderText>
      <SevenDayHeaderText>LOW: 62º</SevenDayHeaderText>
      <SevenDayHeaderText>HIGH: 75º</SevenDayHeaderText>
    </CurrentConditionContainer>
  </>
)

export default SevenDayListEntry;