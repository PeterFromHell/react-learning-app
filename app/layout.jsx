import React from 'react'
import Head from 'next/head'
import './globals.css'

const RootLayout = ({ children }) => {
  return (
    <>
      <html>
        <Head>
          <title>React Learning App</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <body>{children}</body>
      </html>
    </>
  )
}

export default RootLayout
