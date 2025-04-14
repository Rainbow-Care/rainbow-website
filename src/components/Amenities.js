const TITLE = 'Our Amenities';

const AMENITIES_LIST = [
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
    imgSrc: '/images/amenities/AmenitiesImage3.jpg',
    caption: 'Outdoor space for relaxation and activities',
    captionBackground: '#D7598B',
  },
];

const Amenities = ({ className }) => {
  return (
    <section className={className}>
      <div className='justify-self-center mb-10'>
        <h2>{TITLE}</h2>
      </div>
      <div className='flex flex-col justify-center gap-[16px]'>
        {AMENITIES_LIST.map(({ imgSrc, caption, captionBackground }) => {
          return (
            <div key={caption} className='w-full mr-[10px]'>
              <img src={imgSrc} alt={caption} className='rounded-t-md' />
              <div
                className={`font-bold text-[#000000] text-center py-2 rounded-b-md`}
                style={{ backgroundColor: captionBackground }}
              >
                {caption}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Amenities;
