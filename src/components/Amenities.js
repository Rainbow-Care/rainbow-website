const TITLE = 'Our Amenities';

const AMENITIES_LIST = [
  {
    imgSrc: '/images/amenities/AmenitiesImage3.jpg',
    caption: 'Outdoor space for relaxation and activities',
    captionBackground: '#D7598B',
  },
  {
    imgSrc: '/images/amenities/AmenitiesImage2.jpg',
    caption: 'Hall room for dining and activities',
    captionBackground: '#ED6C30',
  },
  {
    imgSrc: '/images/amenities/AmenitiesImage5.jpg',
    caption: 'Rainbow kitchen',
    captionBackground: '#F3FFA4',
  },
  {
    imgSrc: '/images/amenities/AmenitiesImage1.jpg',
    caption: 'Retiring rooms for afternoon (Male members)',
    captionBackground: '#FFD96C',
  },
  {
    imgSrc: '/images/amenities/AmenitiesImage4.jpg',
    caption: 'Retiring rooms for afternoon (Female members)',
    captionBackground: '#40C0E7',
  },
];

const Amenities = ({ className }) => {
  return (
    <section className={className}>
      <div className='text-center py-2 mb-6 sticky top-0 md:w-full bg-white'>
        <h2>{TITLE}</h2>
      </div>
      <div className='flex flex-col gap-[16px]  md:flex-row md:flex-wrap'>
        {AMENITIES_LIST.map(({ imgSrc, caption, captionBackground }) => {
          return (
            <div
              key={caption}
              className='snap-start snap-always md:flex md:flex-col md:w-2/7'
            >
              <img src={imgSrc} alt={caption} className='rounded-t-md' />
              <div
                className={`font-semibold text-[#000000] text-center rounded-b-md py-2 md:grow md:text-base`}
                style={{ backgroundColor: captionBackground }}
              >
                {caption}
              </div>
            </div>
          );
        })}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Amenities;
