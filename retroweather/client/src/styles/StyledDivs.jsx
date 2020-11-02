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
  margin-bottom: 30px;
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
  margin-bottom: 30px;
  padding: 5px;
  padding-top: 0px;
`

export {
  TopBar,
  CurrentConditionContainer
};