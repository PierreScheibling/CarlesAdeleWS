import '@/styles/globals.css'
import Nav from './components/nav'
import Footer from './components/footer'
import { AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Loading from './loading'
import Router from 'next/router'
import Head from 'next/head'

export default function App({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    // Used for page transition
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])

  return (
    <>
      <Head>
        <title>CARLES Avocat</title>
        <meta name="description" content="Site Web du cabinet Carles Avocat" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence>
        <Nav key="nav" />
        {loading ? (
          <Loading />
        ) : (
          <Component key={router.pathname} {...pageProps} />
        )}
        <Footer key="footer" />
      </AnimatePresence>
    </>
  )
}
