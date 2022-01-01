import React from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return typeof window !== 'undefined' ?  <Component {...pageProps} /> : null
}

export default MyApp
