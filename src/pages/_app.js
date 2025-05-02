import { Instrument_Sans } from 'next/font/google';
import '@/styles/globals.css';
import Head from 'next/head';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'], // Specify the character subsets you need
  variable: '--font-instrument-sans', // Optional: Define a CSS variable
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
