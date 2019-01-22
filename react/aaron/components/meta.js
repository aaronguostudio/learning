import Head from 'next/head' // global header

export default () => (
  <div>
    <Head>
      <title>Aaron Guo Studio</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <link href="/static/index.css" />
    </Head>
  </div>
)