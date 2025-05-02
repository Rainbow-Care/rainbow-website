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
        <div class='flex flex-col md:flex-row mx-auto items-center md:items-start w-full'>
          <div class='flex flex-col md:w-1/2 self-center'>
            {/* Left half */}
            <div class='flex flex-col w-full md:w-3/4 gap-4'>
              <h2 className='mb-5 mx-auto md:mx-0'>{TITLE}</h2>
              <p>{DESCRIPTION}</p>
              <span>
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
              </span>
            </div>
          </div>

          {/* Right half */}
          <div class='flex flex-row w-1/2 h-[24rem] overflow-y-auto gap-2 mt-8 md:mt-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
            <div class='flex flex-col w-1/2 gap-2'>
              <div>
                <img
                  src='/images/RainbowDayCareHeroSectionImage1.jpg'
                  alt='Logo of Rainbow Day Care'
                />
              </div>

              <div>
                <img
                  src='/images/RainbowDayCareHeroSectionImage4.jpg'
                  alt='Logo of Rainbow Day Care'
                />
              </div>

              <div>
                <img
                  src='/images/RainbowDayCareHeroSectionImage3.jpg'
                  alt='Logo of Rainbow Day Care'
                />
              </div>
            </div>
            <div class='flex flex-col w-1/2 gap-2'>
              <div>
                <img
                  src='/images/RainbowDayCareHeroSectionImage4.jpg'
                  alt='Logo of Rainbow Day Care'
                />
              </div>

              <div>
                <img
                  src='/images/RainbowDayCareHeroSectionImage4.jpg'
                  alt='Logo of Rainbow Day Care'
                />
              </div>

              <div>
                <img
                  src='/images/RainbowDayCareHeroSectionImage3.jpg'
                  alt='Logo of Rainbow Day Care'
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
