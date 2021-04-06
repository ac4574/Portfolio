import Head from 'next/head'
import Navbar from './Navbar'
// import Header from './Header'
import React from 'react';
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import Home from './Home'


export default function Layout({ children }) {
  const [value, setValue] = React.useState('home');

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
      <div id="header">
        {/* <Header /> */}
        {/* <hr/> */}
        <Navbar value={value} setValue={setValue}/>
        <main>{children}</main>
      </div>
      {value === 'home' ? <Home/> : ''}
      {value === 'about' ? <About/> : ''}
      {value === 'projects' ? <Projects/> : ''}
      {value === 'contact' ? <Contact/> : ''}

      <style jsx>
      {`
        #page-container {
          position: relative;
          min-height: 100vh;
          width: 100%;
          padding-top: 8.5em;
          padding-bottom: 12rem;
        }
        #header {
          width: 100vw;
          margin: 0 auto;
        }
      `}
      </style>
    </div>
  )
}
