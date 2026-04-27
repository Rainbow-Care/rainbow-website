import Image from 'next/image';
import cx from 'classnames';
import Link from 'next/link';

import Button from './Button';

const TITLE = 'Life at Rainbow';
const DESCRIPTION =
  'Our days are structured to fit the physical and mental needs of our wards to keep them happy and fit. Be it art and craft, music, dance, discourses and games - we have it all.';

const Overview = ({ className }) => {
  return (
    <section className={cx(className, '')}>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row mx-auto items-center md:items-start w-full'>
          <div className='flex flex-col md:w-1/2 self-center'>
            {/* Left half */}
            <div className='flex flex-col w-full md:w-3/4 gap-4'>
              <h2 className='mb-5 mx-auto md:mx-0'>{TITLE}</h2>
              <p>{DESCRIPTION}</p>
              <Link
                className='cursor-pointer'
                href={'/gallery'}
                aria-current='page'
              >
                <Button
                  text='View gallery'
                  textColorPrimary={true}
                  backgroundPrimary={false}
                />
              </Link>
            </div>
          </div>

          {/* Right half */}
          <div className='flex flex-row md:w-1/2 h-[24rem] overflow-y-auto gap-4 mt-8 md:mt-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
            <div className='flex flex-col w-1/2 gap-4'>
              <div>
                <Image
                  src='/images/RainbowDayCareHeroSectionImage1.webp'
                  alt='Elderly residents enjoying art and craft at Rainbow Day Care'
                  width={400}
                  height={300}
                  className='w-full h-auto'
                />
              </div>

              <div>
                <Image
                  src='/images/RainbowDayCareHeroSectionImage4.webp'
                  alt='Seniors socialising in the garden at Rainbow Day Care Centre'
                  width={400}
                  height={300}
                  className='w-full h-auto'
                />
              </div>

              <div>
                <Image
                  src='/images/RainbowDayCareHeroSectionImage3.webp'
                  alt='Group of senior citizens playing a game together'
                  width={400}
                  height={300}
                  className='w-full h-auto'
                />
              </div>
            </div>
            <div className='flex flex-col w-1/2 gap-4'>
              <div>
                <Image
                  src='/images/RainbowDayCareHeroSectionImage2.webp'
                  alt='Elderly woman smiling during a day care activity'
                  width={400}
                  height={300}
                  className='w-full h-auto'
                />
              </div>

              <div>
                <Image
                  src='/images/amenities/AmenitiesImage3.webp'
                  alt='Comfortable resting area and amenities for seniors'
                  width={400}
                  height={300}
                  className='w-full h-auto'
                />
              </div>

              <div>
                <Image
                  src='/images/amenities/AmenitiesImage5.webp'
                  alt='Spacious activity hall at Rainbow Day Care Centre'
                  width={400}
                  height={300}
                  className='w-full h-auto'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
