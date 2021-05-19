import '../styles/global.css'
import Layout from '../components/Layout'
import Head from 'next/head'

//THIS IS TOP LEVEL COMPONENT THAT'S ONLY HERE TO IMPORT GLOBAL CSS
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head></Head>
      <Component {...pageProps} />
    </Layout>
  )
}
