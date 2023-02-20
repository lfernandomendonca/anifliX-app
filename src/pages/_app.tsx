import type { AppProps } from 'next/app'
import { Mulish } from '@next/font/google'
import '@/styles/globals.css'

const mulish = Mulish({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${mulish.style.fontFamily};
        }
      `}</style>
  
  <Component {...pageProps} />
  </>
  )
  }
  