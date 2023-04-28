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
        <title>Cabinet d`&apos;`avocat Adèle Carles - Expertise en droit des affaires pour entreprises et particuliers</title>
        <meta name="description" content="Le cabinet d'avocat Adèle Carles offre une expertise pointue en droit des affaires et fiscalité pour entreprises et particuliers. Le Cabinet propose un support permanent afin de répondre à l’ensemble des problématiques fiscales et juridiques auxquelles vous vous trouvez confrontés. Les réponses données tiennent compte de l’environnement juridique, des contraintes de l’activité et de la stratégie de l’entreprise. Contactez Maître Carles dès aujourd'hui pour une consultation confidentielle et professionnelle en droit des affaires." />
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
