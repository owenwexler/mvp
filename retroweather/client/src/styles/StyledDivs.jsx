import styled from 'styled-components';

const TopBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  height: 10%;
  margin: 10px;
  margin-top: 3px;
  margin-bottom: 5px;
  padding: 10px;
  padding-top: 0px;
`

const SavedLocationContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  height: 5%;
  margin: 10px;
  margin-top: 3px;
  margin-bottom: 10px;
  padding: 10px;
  padding-top: 0px;
`

const CurrentConditionContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  height: 25%
  margin: 5px;
  margin-top: 1px;
  margin-bottom: 5px;
  padding: 2px;
  padding-top: 0px;
`

const SevenDayMainContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  height: 25%
  margin: 3px;
  margin-top: 1px;
  margin-bottom: 0px;
  padding: 2px;
`

const SevenDaySubheaderContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  height: 5%
  margin: 0px;
  padding: 2px;
  padding-top: 0px;
`

export {
  TopBar,
  CurrentConditionContainer,
  SavedLocationContainer,
  SevenDayMainContainer,
  SevenDaySubheaderContainer
};