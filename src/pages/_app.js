import { Instrument_Sans } from 'next/font/google';
import '@/styles/globals.css';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'], // Specify the character subsets you need
  variable: '--font-instrument-sans', // Optional: Define a CSS variable
});


export default function MyApp({ Component, pageProps }) {
  return (
    <main className={instrumentSans.className}> {/* Apply the font class here */}
      <Component {...pageProps} />
    </main>
  );
}

