import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../components/styles';
import { Meta } from '../components/common';
import Page from '../components/Page';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <style jsx global>
          {`
            @font-face {
              font-family: 'overpass-regular';
              src: url('/static/overpass-regular.woff2') format('woff2'),
                /* Super Modern Browsers */ url('/static/overpass-regular.woff')
                  format('woff'),
                /* Pretty Modern Browsers */ url('/static/overpass-regular.ttf')
                  format('truetype'); /* Safari, Android, iOS */
              font-style: normal;
              font-weight: 400;
              font-display: fallback;
            }
          `}
        </style>
        <ThemeProvider theme={theme}>
          <Meta />
          <Page>
            <Component {...pageProps} />
          </Page>
        </ThemeProvider>
      </>
    );
  }
}
