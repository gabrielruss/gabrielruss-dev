import baseStyled, {
  createGlobalStyle,
  ThemedStyledInterface,
} from 'styled-components';

export const theme = {
  breakpoint: '1366px',
  colors: {
    white: '#fafafa',
    black: '#2d2d2d',
    transparent_black: '#2d2d2d4D',
    teal: '#17B890',
    transparent_teal: '#17B8904D',
  },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'overpass-regular';
  src: url('/static/overpass-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/static/overpass-regular.woff') format('woff'), /* Pretty Modern Browsers */
       url('/static/overpass-regular.ttf')  format('truetype'); /* Safari, Android, iOS */
  font-style: normal;
  font-weight: 400;
  font-display: fallback; 
}

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'overpass-regular', sans-serif;
    padding: 0;
    margin: 0;
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
  }
`;
