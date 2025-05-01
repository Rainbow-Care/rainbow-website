import useEmblaCarousel from 'embla-carousel-react';
import Carousel, {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from '../Carousel';
import { testimonials } from './testimonials';

const TITLE = 'What Our Families Say About Us';
const Reviews = ({ className }) => {
  return (
    <section className={className}>
      <h2 className='text-center md:text-left'>{TITLE}</h2>
      <Carousel>
        {testimonials.map(({ name, relation, text }) => {
          return (
            <div>
              <p>{name}</p>
              <p>{relation}</p>
              <p>{text}</p>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};

export default Reviews;
