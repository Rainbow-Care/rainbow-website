import Image from 'next/image';
import React from 'react';
import cn from 'classnames';
import TriangleShapeIcon from './TriangleShapeIcon';

const imageList = [
  '/images/RainbowDayCareHeroSectionImage1.jpg',
  '/images/RainbowDayCareHeroSectionImage3.jpg',
  '/images/RainbowDayCareHeroSectionImage2.jpg',
  '/images/RainbowDayCareHeroSectionImage4.jpg',
];

const HeroImage = () => {
  return (
    <div className='flex gap-x-2 mx-auto md:mx-0 md:ml-auto mt-8'>
      {/* left column images */}
      <div className='h-full md:max-h-[500px] flex flex-col gap-y-2 '>
        <div className='aspect-[310/230] ml-auto h-[60%] relative'>
          <div className='absolute -top-[20px] -left-[24px] z-10'>
            <TriangleShapeIcon className='w-[20px] h-[20px] rotate-[10deg]' />
          </div>
          <Image
            src='/images/RainbowDayCareHeroSectionImage1.jpg'
            alt='Rainbow Day Care' // **Crucial: Add alt text for accessibility**
            objectFit='contain' //  Like object-contain in CSS
            sizes='100%'
            className='rounded-md'
            fill
          />
          <div className='absolute -bottom-[56px] -left-[52px] z-10 top-left'>
            <img
              src='/images/heroSectionIcons/pie.svg'
              className='w-[100px] h-[100px] rotate-[0deg]'
            />
          </div>
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
          <div className='absolute -bottom-[48px] -left-[50px] w-[80px] h-[80px] z-10'>
            <img
              src='/images/heroSectionIcons/scribbles.svg'
              className='w-full h-full inline-block'
            />
          </div>
        </div>
      </div>

      {/* right column images */}
      <div className='w-auto h-full max-h-[450px] flex flex-col gap-y-2'>
        <div className='aspect-[420/560] h-[45%] mr-auto relative'>
          <div className='absolute -top-[48px] -right-[100px] w-[80px] h-[80px] z-10'>
            <img
              src='/images/heroSectionIcons/scribbles.svg'
              className='w-full h-full inline-block rotate-[180deg]'
            />
          </div>
          <div className='absolute top-[2px] -right-[50px] z-10'>
            <TriangleShapeIcon
              className='w-[50px] h-[50px] rotate-[16deg]'
              fill='#FFD96C'
            />
          </div>
          <Image
            src='/images/RainbowDayCareHeroSectionImage2.jpg'
            alt='Rainbow Day Care' // **Crucial: Add alt text for accessibility**
            sizes='100%'
            objectFit='contain' //  Like object-contain in CSS
            className='rounded-md'
            fill
          />
          <div className='absolute bottom-[10px] -right-[46px] z-10'>
            <TriangleShapeIcon
              className='w-[30px] h-[30px] rotate-[16deg]'
              fill='#ED6C30'
            />
          </div>
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
          <div className='absolute -bottom-[40px] -right-[30px] z-10'>
            <TriangleShapeIcon
              className='w-[20px] h-[20px] rotate-[78deg]'
              fill='#D7598B'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
