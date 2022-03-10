import { MoralisProvider } from 'react-moralis'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <MoralisProvider
      appId=''
      serverUrl=''
    >
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
