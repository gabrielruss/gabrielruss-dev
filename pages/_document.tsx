import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { Analytics } from '@vercel/analytics/react';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            <style jsx global>
              {`
                @font-face {
                  font-family: 'overpass-regular';
                  src: url('/static/overpass-regular.woff2') format('woff2'),
                    /* Super Modern Browsers */
                      url('/static/overpass-regular.woff') format('woff'),
                    /* Pretty Modern Browsers */
                      url('/static/overpass-regular.ttf') format('truetype'); /* Safari, Android, iOS */
                  font-style: normal;
                  font-weight: 400;
                  font-display: fallback;
                }
              `}
            </style>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <Analytics />
        </body>
      </Html>
    );
  }
}
