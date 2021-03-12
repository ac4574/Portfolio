import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div id="page-container">
      <Head>
        <title>Anderson's Portfolio</title>
          <meta
            name="description"
            content="???"
          />
          <meta
            property="og:description"
            content="???"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1"
          />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="content-wrap">
        <Navbar />
        <main>{children}</main>
      </div>

      <style jsx>
      {`
        #page-container {
          position: relative;
          min-height: 100vh;
          width: 100%;
          padding-bottom: 12rem;
        }
        #content-wrap {
          margin-top: 50px;
        }
      `}
      </style>
    </div>
  )
}
