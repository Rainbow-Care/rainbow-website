import { Instrument_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  preload: true,
  variable: '--font-instrument-sans',
});

const nibProBold = localFont({
  src: '../fonts/nibPro-bold.woff2',
  display: 'swap',
  preload: true,
  variable: '--font-nib-pro-bold',
});

export const metadata = {
  metadataBase: new URL('https://rainbowdaycarecentre.org'),
  title: {
    template: '%s | Rainbow Day Care Centre',
    default: 'Rainbow Day Care Centre | Elderly Day Care in Pune',
  },
  description:
    'Rainbow Day Care Centre is a safe, nurturing day care for senior citizens in Pune, designed for elderly parents to unwind, socialise and learn with their peers.',
  keywords: [
    'adult day care',
    'senior citizens day care',
    'elderly day care Pune',
    'day care for elderly parents Pune',
    'senior day care Kothrud',
    'Anuradha Karkare Rainbow',
  ],
  openGraph: {
    siteName: 'Rainbow Day Care Centre',
    type: 'website',
    locale: 'en_IN',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${instrumentSans.variable} ${nibProBold.variable} main-body antialiased`}
      >
        <a
          href='#main-content'
          className='sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] bg-white p-4 text-[#1e85a2] font-bold rounded-md shadow-md outline-none focus:ring-4 focus:ring-[#1e85a2] focus:ring-opacity-50'
        >
          Skip to main content
        </a>
        <Navbar />
        <div id='main-content'>{children}</div>
      </body>
    </html>
  );
}
