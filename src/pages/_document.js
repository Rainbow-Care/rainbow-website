import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='A daycare in the heart of Pune, safely designed for your elderly parents to unwind, socialise and learn with their peers.'
        />
        <meta
          name='keywords'
          content='adult day care, senior citizens day care'
        />
        <meta name='google-site-verification' content='...' />
      </Head>
      <body className='antialiased'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
