import Button from '@/components/Button';
import HeroImage from './HeroImage';

const HeroSection = () => {
  return (
    <div className='flex flex-col md:flex-row gap-x-4 container mx-auto md:max-h-[450px]'>
      {/* Left half */}
      <div className='flex flex-col justify-center  order-last md:order-first'>
        <div className='md:max-w-[380px] text-center md:text-left'>
          <h1 className='font-light'>
            A place that makes our silver citizens happy
          </h1>

          <p className='text-center w-[35ch] m-auto md:text-left'>
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
            className='hidden md:inline'
            text='Learn More'
            textColorPrimary
            backgroundPrimary={false}
          />
        </div>
      </div>

      {/* Right half */}
      <div className='flex overflow-hidden aspect-[650/450] md:grow order-first'>
        <HeroImage />
      </div>
    </div>
  );
};

export default HeroSection;
