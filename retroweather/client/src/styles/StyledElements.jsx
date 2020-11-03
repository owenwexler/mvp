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

const CurrentConditionDateWeatherLogo = styled.h1`
  font-size: 65;
`

const SevenDayHeaderText = styled.h3`
  font-size: 34;
`

const SavedLocationEntryStyle = styled.h5`
  cursor: pointer;
  &:hover {
    color: gray;
  }
`

export {
  GlobalStyles,
  RWLogo,
  SearchBox,
  SearchButton,
  CurrentConditionDateWeatherLogo,
  SevenDayHeaderText,
  SavedLocationEntryStyle
};