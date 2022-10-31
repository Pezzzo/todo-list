import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { defaultTheme } from '../../theme/default';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`

${normalize}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
    min-height: 100%;
    background-color: ${defaultTheme.colorLightGrey};
  }

body,
html {
    margin: 0 auto;
  }

body {
  position: relative;
  min-height: 100%;
  min-width: 320px;
  padding-left: 20px;
  padding-right: 20px;
  max-width: ${defaultTheme.pageWidth};
  font-family: ${defaultTheme.fontFamily};
  font-size: ${defaultTheme.fontSizeDefault};
  color: ${defaultTheme.colorBlack};
  font-weight: 600;

  a {
    text-decoration: none;
  }
}

img {
    max-width: 100%;
    height: auto;
  }
`;

export const Wrapper = styled.section`
position: relative;
background-color: ${defaultTheme.colorWhite};
max-width: 600px;
margin: 0 auto;

box-shadow: 0 4px 6px 2px ${defaultTheme.colorGrey};
outline: 1px solid ${defaultTheme.colorGrey};
outline-offset: -1px;

&::before {
  outline: 1px solid ${defaultTheme.colorGrey};
  outline-offset: -1px;
  position: absolute;
  content: '';
  width: 99%;
  height: 5px;
  background-color: ${defaultTheme.colorWhite};
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%)
}

&::after {
  outline: 1px solid ${defaultTheme.colorGrey};
  outline-offset: -1px;
  position: absolute;
  content: '';
  width: 98%;
  height: 5px;
  background-color: ${defaultTheme.colorWhite};
  bottom: -10px;
  box-shadow: 0 2px 6px 2px ${defaultTheme.colorGrey};
  left: 50%;
  transform: translateX(-50%)
}
`
export const Title = styled.h1`
font-size: 120px;
font-weight: 100;
margin-top: 40px;
margin-bottom: 20px;
color: ${defaultTheme.colorLilac};
text-align: center;
`
