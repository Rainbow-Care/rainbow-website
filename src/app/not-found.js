import Link from 'next/link';

export const metadata = {
  title: '404 — Page Not Found',
};

export default function NotFound() {
  return (
    <main className='flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center px-4'>
      <h1 className='text-8xl font-bold text-primary'>404</h1>
      <h2>Page Not Found</h2>
      <p className='max-w-[40ch]'>
        Sorry, we couldn&apos;t find the page you were looking for.
      </p>
      <Link
        href='/'
        className='rounded-md font-bold py-2 px-5 border-2 border-primary text-primary'
      >
        Return to Home
      </Link>
    </main>
  );
}
