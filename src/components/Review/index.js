import useEmblaCarousel from 'embla-carousel-react';
import cx from 'classnames';
import Carousel from '../Carousel';
import { testimonials } from './testimonials';

const TITLE = 'What Our Families Say About Us';
const Reviews = ({ className }) => {
  return (
    <section className={cx('container mx-auto', className)}>
      <h2 className='text-center mb-8 max-w-[25ch] m-auto md:text-left mb-8'>
        {TITLE}
      </h2>
      <Carousel>
        {testimonials.map(({ name, relation, text }, index) => {
          return (
            <div
              className='w-full bg-[#FFD96C] rounded-2xl p-8 md:px-20 md:py-12'
              key={index}
            >
              <p>
                <span className='font-bold'>{name}</span>
                <span className='block md:inline-block md:ml-2'>
                  {relation}
                </span>
              </p>
              <p className='whitespace-pre-wrap text-[#454545]'>{text}</p>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};

export default Reviews;
