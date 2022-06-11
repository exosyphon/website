import { useRouter } from 'next/router'
import { useEffect } from 'react'
import '../src/styles.css'
import * as ga from '../lib/ga'
import Script from 'next/script'
import CookieConsent from 'react-cookie-consent'
import Link from 'next/link'

function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Script
        id="google-analytics1"
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        id="google-analytics2"
        strategy='lazyOnload'
      >
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        
      `
        }
      </Script>
      <CookieConsent>
        <span>This site uses cookies. See our</span>
        <Link href="https://www.termsfeed.com/live/64371ae2-26b9-4175-ae77-97a299960ff4">
          <a className='inline-flex items-center p-1 underline'>
            Privacy Policy
          </a>
        </Link>
        <span>for more information.</span>
      </CookieConsent>
      <Component {...pageProps} />
    </>)
}

export default App
