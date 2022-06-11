import '../src/styles.css'
import Script from 'next/script'

function App({ Component, pageProps }) {
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
      <Component {...pageProps} />
    </>)
}

export default App
