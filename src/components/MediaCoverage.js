import cx from 'classnames';

const MediaCoverage = ({ className }) => {
  const imgClass = `max-w-[220px]`;
  return (
    <section className={cx(className, 'container mx-auto')}>
      <h2 className='text-center md:text-left'>Featured By Leading Media</h2>
      <div className='flex flex-col md:flex-row gap-8 md:gap-x-4 justify-between place-items-center mt-16'>
        <img
          src='/images/lokmat.svg'
          className={imgClass}
          alt='Lokmat News Paper Icon'
        ></img>
        <img
          src='/images/sakal.svg'
          className={imgClass}
          alt='Sakal News Paper Icon'
        ></img>
        <img
          src='/images/abp.svg'
          className={imgClass}
          alt='ABP Majha Icon'
        ></img>
        <img
          className={imgClass}
          src='/images/mahaTimes.svg'
          alt='Maharashtra Times New Paper Icon'
        ></img>
        <img src='/images/zee.svg' className={imgClass} alt='Zee 24 Icon'></img>
      </div>
    </section>
  );
};

export default MediaCoverage;
