'use client';

import { useState } from 'react';
import Image from 'next/image';

const TITLE = 'Why Elderly Daycare';
const DESCRIPTION =
  'A conversation with Anuradha Karkare, Founder of Rainbow Daycare';
const VIDEO_ID = '9JV6FrDrbH8';

const ReasonToChoose = ({ className }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className={className}>
      <div className='container mx-auto'>
        <h2 className='text-center mb-4 md:text-left'>{TITLE}</h2>
        <div className='flex flex-col'>
          <p className=' mx-auto md:mx-0 md:mr-auto text-center md:text-left'>
            {DESCRIPTION}
          </p>
          <div className='min-h-[200px] mt-8 w-full mx-auto relative group'>
            {isPlaying ? (
              <iframe
                style={{
                  aspectRatio: '16 / 9',
                  width: '100%',
                }}
                src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1`}
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>
            ) : (
              <div
                className='w-full relative cursor-pointer flex items-center justify-center bg-gray-200'
                style={{ aspectRatio: '16 / 9' }}
                onClick={() => setIsPlaying(true)}
              >
                <Image
                  src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  alt='Play video conversation with Anuradha Karkare'
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <button
                  type='button'
                  aria-label='Play Video'
                  className='absolute z-10 w-16 h-16 bg-white/80 rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#1E85A2] group-hover:text-white transition-colors'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                  >
                    <path d='M8 5v14l11-7z' />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReasonToChoose;
