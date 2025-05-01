import Image from 'next/image';
import React from 'react';
import cn from 'classnames';

const imageList = [
  '/images/RainbowDayCareHeroSectionImage1.jpg',
  '/images/RainbowDayCareHeroSectionImage3.jpg',
  '/images/RainbowDayCareHeroSectionImage2.jpg',
  '/images/RainbowDayCareHeroSectionImage4.jpg',
];

const HeroImage = () => {
  return (
    <div className='grid grid-cols-3 gap-2'>
      {/* left column images */}
      <div className=' col-span-2 flex flex-col items-end gap-2 max-h-[28rem]'>
        <div className='aspect-[310/230] grow h-[55%]'>
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Image
              src='/images/RainbowDayCareHeroSectionImage1.jpg'
              alt='Rainbow Day Care' // **Crucial: Add alt text for accessibility**
              objectFit='contain' //  Like object-contain in CSS
              sizes='100%'
              className='rounded-md'
              fill
            />
          </div>
        </div>
        <div className='aspect-[210/132] grow self-end flex justify-end w-3/5'>
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Image
              src='/images/RainbowDayCareHeroSectionImage3.jpg'
              alt='Rainbow Day Care'
              sizes='100%'
              objectFit='contain' // Changed from objectFit="scale-contain"
              className='rounded-md'
              fill
            />
          </div>
        </div>
      </div>

      {/* right column images */}
      <div className='flex flex-col col-span-1 gap-2'>
        <div className='aspect-[310/230] h-[45%]'>
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Image
              src='/images/RainbowDayCareHeroSectionImage2.jpg'
              alt='Rainbow Day Care' // **Crucial: Add alt text for accessibility**
              sizes='100%'
              objectFit='contain' //  Like object-contain in CSS
              className='rounded-md'
              fill
            />
          </div>
        </div>
        <div className='aspect-[210/132] grow self-end flex justify-end max-w-[100%]'>
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Image
              src='/images/RainbowDayCareHeroSectionImage4.jpg'
              alt='Rainbow Day Care' // **Crucial: Add alt text for accessibility**
              sizes='100%'
              objectFit='contain' //  Like object-contain in CSS
              className='rounded-md w-[full] h-[full]'
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
// <img src='/images/RainbowDayCareHeroSectionImage4.jpg' className="h-full object-contain rounded-md" />
// <img src='/images/RainbowDayCareHeroSectionImage3.jpg' className="h-full object-scale-contain rounded-md" />
// <img src='/images/RainbowDayCareHeroSectionImage1.jpg' className="h-full object-contain rounded-md" />
// <img src='/images/RainbowDayCareHeroSectionImage2.jpg' className="h-full object-contain rounded-md" />
