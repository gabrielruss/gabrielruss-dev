import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../components';
import Page from '../components/Page';
import Meta from '../components/common/Meta';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Meta />
        <Page>
          <Component {...pageProps} />
        </Page>
      </ThemeProvider>
    );
  }
}
