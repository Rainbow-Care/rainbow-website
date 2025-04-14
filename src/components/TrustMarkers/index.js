import cx from 'classnames';

import './styles.css';

const trustMarkerData = [
  {
    value: 450,
    text: 'Happy and thriving Elderly  members are part of the community',
  },
  {
    value: 400,
    text: 'Families relieved from  the concern of constant care giving and monitoring of elderly',
  },
  {
    value: 1000,
    text: 'have received benefit from various programs like Mind Gym, exercise and cognitive activities',
  },
  {
    value: 9,
    text: 'years of helping families take care of their elderly members harmoniously',
  },
];

const TrustMarkers = ({
  className: classNameFromProps,
  data = trustMarkerData,
}) => {
  return (
    <section className={cx(classNameFromProps, 'pt-20')}>
      <div className='waves' style={{ width: '100%', height: '200px' }}></div>

      <div className='trustMarkers-wrapper '>
        <div className="container mx-auto flex flex-col gap-y-8 md:flex-row md:gap-x-8 pb-8">
          {Array.isArray(trustMarkerData)
            ? data.map(({ value, text }, idx) => (
              <TrustMarkerCard
                value={value}
                text={text}
                key={idx + ' ' + value}
              />
            ))
            : null}
        </div>
      </div>
    </section>
  );
};

const TrustMarkerCard = ({ value, text }) => {
  return (
    <div className='flex flex-col max-w-[180px] md:max-w-[250px] mx-auto'>
      <h2>{value}+</h2>
      <p className='text-md'>{text}</p>
    </div>
  );
};

export default TrustMarkers;
