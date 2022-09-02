import StateWrapper from '../components/StateWrapper';

import Head from 'next/head'

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function MyApp({ Component, pageProps }) {
  return (
   <StateWrapper>
      <Head>
        <meta name="better safe" content="Productos de defensa personal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Component {...pageProps} />
   </StateWrapper>
  )
}

export default MyApp
