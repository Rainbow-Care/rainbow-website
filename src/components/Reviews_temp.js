import useEmblaCarousel from 'embla-carousel-react';

const TITLE = 'What Our Families Say About Us';

const Reviews = ({ className }) => {
  const [emblaRef] = useEmblaCarousel();
  return (
    <section className={className}>
      <div className='container mx-auto embla' ref={emblaRef}>
        <div className='embla__container'>
          <div className='embla__slide'>
            <h2 className='text-center md:text-left'>{TITLE}</h2>
            <div className='flex flex-col'>
              <div className='min-w min-h-48 bg-[#FFD96C]'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
