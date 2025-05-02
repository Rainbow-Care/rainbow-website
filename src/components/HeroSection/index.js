import Button from '@/components/Button';
import HeroImage from './HeroImage';

const HeroSection = () => {
  return (
    <div className='flex flex-col md:flex-row gap-x-4 container mx-auto md:max-h-[450px]'>
      {/* Left half */}
      <div className='flex flex-col md:max-w-[33%] lg:max-w-[45%] justify-center  order-last mt-12 md:mt-4 md:order-first'>
        <div className='text-center md:text-left'>
          <h1 className='font-light'>
            A place that makes our silver citizens happy
          </h1>

          <p className='m-auto text-base md:text-xl mt-4'>
            Rainbow Daycare is a safe space designed for your elderly parents
            and wards to unwind, socialize and learn with their peers
          </p>
        </div>
        <div className='h-fit flex-row gap-x-8 mt-8 justify-center flex hidden'>
          <Button
            text='Schedule an appointment'
            textColorPrimary={false}
            backgroundPrimary
          />
          <Button
            className='hidden md:inline'
            text='Learn More'
            textColorPrimary
            backgroundPrimary={false}
          />
        </div>
      </div>

      {/* Right half */}
      <div className='flex aspect-[650/450] md:grow order-first pr-[56px] pb-4 pl-[48px]'>
        <HeroImage />
      </div>
    </div>
  );
};

export default HeroSection;
