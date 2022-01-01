import React from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return typeof window !== 'undefined' ?  <React.StrictMode><Component {...pageProps} /></React.StrictMode> : null
}

export default MyApp
