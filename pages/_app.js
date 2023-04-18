import '@/styles/globals.css'
import Nav from './components/nav';
import Footer from './components/footer';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps, router }) {
  return (
      <AnimatePresence>
        <Nav key="nav" />
        <Component key={router.pathname} {...pageProps}/>
        <Footer key="footer"/>
      </AnimatePresence>
  )
}
