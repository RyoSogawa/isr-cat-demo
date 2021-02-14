import { AppProps } from 'next/app'
import 'sanitize.css'
import '../styles/globals.scss'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>isr-cat-demo</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@800&family=Noto+Sans+JP&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main style={{ paddingTop: '56px' }}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
