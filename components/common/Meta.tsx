import Head from 'next/head';

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <meta property="og:title" content="Gabriel Russ Portfolio" />
    <meta
      property="og:description"
      content="making the internet a better place, one div at a time"
    />
    <meta property="og:image" content="/static/biglogo.png" />
    <meta property="og:url" content="https://gabrielruss.dev" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:image"
      content="https://gabrielruss-dev-90tyfk86b.vercel.app/static/biglogo.png"
    />
    <meta name="twitter:image:alt" content="Gabriel Russ Portfolio" />
    <link rel="shortcut icon" href="/static/favicon.ico" />
    <title>Gabriel Russ Portfolio</title>
  </Head>
);

export default Meta;
