import { Instrument_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import '@/styles/globals.css';
import Head from 'next/head';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'], // Specify the character subsets you need
  preload: true,
  variable: '--font-instrument-sans', // Optional: Define a CSS variable
});

const myFont = localFont({
  src: '../fonts/nibPro-bold.woff2',
  display: 'swap',
  preload: true,
  variable: '--font-nib-pro-bold',
  weight: '600',
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>A place that makes our silver citizens happy</title>
      </Head>
      <main className={instrumentSans.className}>
        {' '}
        {/* Apply the font class here */}
        <Component {...pageProps} />
      </main>
    </>
  );
}
