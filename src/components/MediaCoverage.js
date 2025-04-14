import cx from 'classnames';

const MediaCoverage = ({ className }) => {
  return (
    <section className={cx(className, 'container mx-auto')}>
      <h2>Featured By Leading Media</h2>
      <div className='flex gap-4 justify-between mt-16'>
        <img src='/images/lokmat.svg' alt='Lokmat New Paper Icon'></img>
        <img src='/images/sakal.svg' alt='Sakal New Paper Icon'></img>
        <img src='/images/abp.svg' alt='ABP Majha Icon'></img>
        <img
          src='/images/mahaTimes.svg'
          alt='Maharashtra Times New Paper Icon'
        ></img>
        <img src='/images/zee.svg' alt='Zee 24 Icon'></img>
      </div>
    </section>
  );
};

export default MediaCoverage;
