import React, { Children } from 'react';
import cx from 'classnames';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './CarouselArrowButtons';
import styles from './carousel.module.css';
import useEmblaCarousel from 'embla-carousel-react';

const Carousel = (props) => {
  const { options, children } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const containerClasses = cx('container mx-auto', styles.embla);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  // <div className='embla__viewport' ref={emblaRef}></div>
  //
  let slideIndex = 0;
  return (
    <section className='embla'>
      <div className={containerClasses} ref={emblaRef}>
        <div className={styles.embla__container}>
          {Children.map(children, (child) => (
            <div className='embla__slide' key={slideIndex++}>
              <div className='embla__slide__number'>{child}</div>
            </div>
          ))}
        </div>
      </div>

      <div className='embla__controls'>
        <div className='embla__buttons'>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default Carousel;
export * from './CarouselArrowButtons';
