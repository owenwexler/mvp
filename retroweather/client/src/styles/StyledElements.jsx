import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('../../../font/press_start/PressStart2P-Regular.ttf');

body {
  font-family: 'Press Start 2P', sans-serif;
  background-color: black;
  color: white;
}
`

const RWLogo = styled.h1`
  font-size: 40px;
  font-weight: bold;
  padding: 5px;
`

const SearchBox = styled.input`
  padding: 10px;
  text-align: left;
  border: 5px solid white;
  width: 48%;
  height: 50%;
  font-family: 'Press Start 2P', sans-serif;
  background-color: black;
  color: white;
  outline: none;
  margin-right: .2em;
`

const SearchButton = styled.button`
  padding: 10px;
  padding-left: 20px;
  text-align: left;
  border: 5px solid white;
  width: 10em;
  height: 50%;
  font-family: 'Press Start 2P', sans-serif;
  background-color: black;
  color: white;
  outline: none;
  margin-right: .2em;
  &:hover {
    background-color: gray;
  }
`

const GeneralHeader = styled.h2`
  text-align: center,
  margin-bottom: 30px;
`

const CurrentConditionDateWeatherLogo = styled.h1`
  font-size: 65;
  margin: 12px;
`

const SevenDayHeaderText = styled.h3`
  font-size: 34;
  margin: 12px;
  margin-top: 40px;
`

const SavedLocationEntryStyle = styled.h5`
  margin: 11px;
  cursor: pointer;
  &:hover {
    color: gray;
  }
`

const CurrentConditionSubHeaderH4 = styled.h3`
  margin: 8px;
`

const SevenDaySubHeaderH5 = styled.h5`
  margin: 8px;
`

export {
  GlobalStyles,
  RWLogo,
  SearchBox,
  SearchButton,
  CurrentConditionDateWeatherLogo,
  SevenDayHeaderText,
  SevenDaySubHeaderH5,
  CurrentConditionSubHeaderH4,
  SavedLocationEntryStyle
};