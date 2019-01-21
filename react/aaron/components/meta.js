import Head from 'next/head' // global header
import "../styles/index.styl" // global styles

export default () => (
  <div>
    <Head>
      <title>Aaron Guo Studio</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
    </Head>
  </div>
)