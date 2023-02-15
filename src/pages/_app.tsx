import '@/styles/globals.css'
import NavBar from 'components/NavBar'
import Footer from 'components/Footer'
import Dashboard from 'components/Dashboard'
// import Contact from 'components/Contact'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <NavBar />
    <Dashboard />
    <Component {...pageProps} />
    {/* <Contact /> */}
    <Footer />
    </>
    )
}
