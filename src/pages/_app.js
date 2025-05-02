import { Instrument_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import cx from 'classnames';
import '@/styles/globals.css';
import Head from 'next/head';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'], // Specify the character subsets you need
  preload: true,
  variable: '--font-instrument-sans', // Optional: Define a CSS variable
});

const nibProBold = localFont({
  src: '../fonts/nibPro-bold.woff',
  display: 'swap',
  preload: true,
  variable: '--font-nib-pro-bold',
});

console.log(instrumentSans, '', nibProBold);

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>A place that makes our silver citizens happy</title>
      </Head>
      <main
        className={`${instrumentSans.variable} ${nibProBold.variable} main-body`}
      >
        {/* Apply the font class here */}
        <Component {...pageProps} />
      </main>
    </>
  );
}
