import Image from 'next/image';
import React from 'react';
import cn from 'classnames';

const imageList = [
  '/images/RainbowDayCareHeroSectionImage1.jpg',
  '/images/RainbowDayCareHeroSectionImage3.jpg',
  '/images/RainbowDayCareHeroSectionImage2.jpg',
  '/images/RainbowDayCareHeroSectionImage4.jpg',
];

const HeroImage2 = () => {
  return (
    <div className='flex gap-x-2 mx-auto'>
      {/* left column images */}
      <div className='h-full md:max-h-[500px] flex flex-col gap-y-2 '>
        <div className='aspect-[310/230] ml-auto h-[60%] relative'>
          <Image
            src='/images/RainbowDayCareHeroSectionImage1.jpg'
            alt='Rainbow Day Care' // **Crucial: Add alt text for accessibility**
            objectFit='contain' //  Like object-contain in CSS
            sizes='100%'
            className='rounded-md'
            fill
          />
        </div>
        <div className='h-[30%] aspect-[560/390] relative ml-auto'>
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

      {/* right column images */}
      <div className='w-auto h-full max-h-[450px] flex flex-col gap-y-2'>
        <div className='aspect-[420/560] h-[45%] mr-auto relative'>
          <Image
            src='/images/RainbowDayCareHeroSectionImage2.jpg'
            alt='Rainbow Day Care' // **Crucial: Add alt text for accessibility**
            sizes='100%'
            objectFit='contain' //  Like object-contain in CSS
            className='rounded-md'
            fill
          />
        </div>
        <div className='aspect-[420/480]  h-[45%]  mr-auto relative'>
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
  );
};

export default HeroImage2;
// <img src='/images/RainbowDayCareHeroSectionImage4.jpg' className="h-full object-contain rounded-md" />
// <img src='/images/RainbowDayCareHeroSectionImage3.jpg' className="h-full object-scale-contain rounded-md" />
// <img src='/images/RainbowDayCareHeroSectionImage1.jpg' className="h-full object-contain rounded-md" />
// <img src='/images/RainbowDayCareHeroSectionImage2.jpg' className="h-full object-contain rounded-md" />
