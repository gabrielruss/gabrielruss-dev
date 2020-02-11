import baseStyled, {
  createGlobalStyle,
  ThemedStyledInterface,
} from 'styled-components';

export const theme = {
  /**
   * 1366px
   */
  break_large: '1366px',
  /**
   * 900px
   */
  break_medium: '900px',
  /**
   * 500px
   */
  break_small: '500px',
  colors: {
    white: '#fafafa',
    trans_white: '#fafafae6',
    black: '#2d2d2d',
    trans_black: '#2d2d2d4D',
    teal: '#17B890',
    aa_teal: '#15A883',
    aaa_teal: '#108467',
    trans_teal: '#17B8904D',
    flamingo: '#fb9f89',
    purple: '#7a82ab',
    yellow: '#e6e18f',
  },
  fonts: {
    overpass_regular: 'overpass-regular',
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
    /* TODO: this seems to cause a weird issue when resizing the screen */
    /* makes about 17px of blank space on left side of screen */
    /* margin-left: calc(100vw - 100%); */
    overflow-x: hidden;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'overpass-regular', sans-serif;
    font-size: 2rem;
    font-weight: 400;
    padding: 0;
    margin: 0;
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
  }
`;
