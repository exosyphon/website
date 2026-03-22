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
      <CookieConsent
        location="top"
        buttonText="Got it"
        style={{
          background: '#18181b',
          borderBottom: '1px solid #27272a',
          fontSize: '13px',
          color: '#a1a1aa',
          padding: '10px 24px',
        }}
        buttonStyle={{
          background: 'transparent',
          border: '1px solid #3f3f46',
          color: '#a1a1aa',
          fontSize: '12px',
          borderRadius: '4px',
          padding: '4px 12px',
          cursor: 'pointer',
        }}
      >
        This site uses cookies for analytics.{' '}
        <Link href="https://www.termsfeed.com/live/64371ae2-26b9-4175-ae77-97a299960ff4">
          <a style={{ color: '#71717a', textDecoration: 'underline' }}>
            Privacy Policy
          </a>
        </Link>
      </CookieConsent>
      <Component {...pageProps} />
    </>)
}

export default App
