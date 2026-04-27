'use client';

export default function Error({ reset }) {
  return (
    <main className='flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center px-4'>
      <h2>Something went wrong</h2>
      <p className='max-w-[40ch]'>
        We&apos;re sorry — an unexpected error occurred. Please try again.
      </p>
      <button
        type='button'
        onClick={reset}
        className='rounded-md font-bold py-2 px-5 border-2 border-primary text-primary'
      >
        Try again
      </button>
    </main>
  );
}
