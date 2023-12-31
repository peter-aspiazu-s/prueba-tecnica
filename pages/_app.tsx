import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Manrope } from '@next/font/google';


const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '700']
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={manrope.className}>
      <Component {...pageProps} />
    </main>
  )
}
