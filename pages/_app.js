import '@/styles/globals.css'
import Nav from './components/nav';
import Footer from './components/footer';

export default function App({ Component, pageProps }) {
  return (
      <div>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
  )
}
