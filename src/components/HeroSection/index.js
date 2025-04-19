import Button from '@/components/Button';
import HeroImage from "./HeroImage";

const HeroSection = () => {
  return (
    <div className='flex flex-col md:flex-row gap-x-4 container mx-auto md:max-h-[450px]'>
      {/* Left half */}
      <div className='flex flex-col justify-center  order-last md:order-first'>
        <div className="md:max-w-[380px] text-center md:text-left">
          <h1 className='font-light'>
            A place that makes our silver citizens happy
          </h1>
          <p>
            Rainbow Daycare is a safe space designed for your elderly parents
            and wards to unwind, socialize and learn with their peers
          </p>
        </div>
        <div className='h-fit flex-row gap-x-8 mt-8 justify-center flex'>
          <Button
            text='Schedule an appointment'
            textColorPrimary={false}
            backgroundPrimary
          />
          <Button
            className="hidden md:inline"
            text='Learn More'
            textColorPrimary
            backgroundPrimary={false}
          />
        </div>

      </div>

      {/* Right half */}
      <div style={{ aspectRatio: '650/450', overflow: 'hidden' }}
        className='grow grid grid-flow-col py-4 order-first md:max-w-[60%] md:order-last'>
        <HeroImage />
        {/*
        <div className='flex flex-col h-fit w-full'>
          <div>
            <img
              src='/images/RainbowDayCareHeroSectionImage1.jpg'
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
        <div className='flex flex-col w-fit'>
          <img
            src='/images/RainbowDayCareHeroSectionImage2.jpg'
            alt='Logo of Rainbow Day Care'
          ></img>
          <img
            src='/images/RainbowDayCareHeroSectionImage4.jpg'
            alt='Logo of Rainbow Day Care'
          ></img>
        </div>
        */}
      </div>
    </div>
  );
};

export default HeroSection;
