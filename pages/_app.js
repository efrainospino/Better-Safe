import StateWrapper from '../components/StateWrapper';

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function MyApp({ Component, pageProps }) {
  return (
   <StateWrapper>
     <Component {...pageProps} />
   </StateWrapper>
  )
}

export default MyApp
