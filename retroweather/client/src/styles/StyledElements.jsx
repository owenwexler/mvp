import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('../../../font/press_start/PressStart2P-Regular.ttf');

body {
  font-family: 'Press Start 2P', sans-serif;
  background-color: black;
  color: white;
}
`

const TextBox = styled.input`
  padding: 6px;
  text-align: left;
`

export default GlobalStyles;