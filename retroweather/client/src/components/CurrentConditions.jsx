import React from 'react';

// import clear from '../images/clear.png';

// Container

import { CurrentConditionContainer } from '../styles/StyledDivs.jsx';

const CurrentConditions = ({currentConditions}) => {
  return (
    <>
      <CurrentConditionContainer>
        <img src="images/clear.png"></img>
        <h1>46º</h1>
        <h5>MORE HERE</h5>
      </CurrentConditionContainer>
    </>
  )
}

export default CurrentConditions;