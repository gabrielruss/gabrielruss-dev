import Head from 'next/head';

const Meta = () => (
  <Head>
    <title>Gabriel Russ Portfolio</title>
    <meta name="title" content="Gabriel Russ Portfolio" />
    <meta name="description" content="" />
    <link rel="shortcut icon" href="/static/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    {/* Open Graph */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://gabrielruss.dev/" />
    <meta property="og:title" content="Gabriel Russ Portfolio" />
    <meta
      property="og:description"
      content="making the internet a better place, one div at a time"
    />
    <meta property="og:image" content="https://imgur.com/wUZp9FX" />
    {/* Twitter */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://gabrielruss.dev/" />
    <meta property="twitter:title" content="Gabriel Russ Portfolio" />
    <meta
      property="twitter:description"
      content="making the internet a better place, one div at a time"
    />
    <meta property="twitter:image" content="https://imgur.com/wUZp9FX" />
    <meta property="twitter:image:alt" content="Gabriel Russ Portfolio" />
  </Head>
);

export default Meta;
