const TITLE = 'Our Activity';

const ACTIVITIES_LIST = [
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
];

const Activity = ({ className }) => {
  return (
    <section className={className}>
      <div className='text-center mb-10 sticky top-0 w-full py-2 bg-white'>
        <h2>{TITLE}</h2>
      </div>
      <div className='flex flex-col md:grid md:grid-cols-3 lg:max-w-1/2 lg:justify-self-center gap-[16px]'>
        {ACTIVITIES_LIST.map(({ imgSrc, caption, captionBackground }) => {
          return (
            <div key={caption} className='md:flex md:flex-col'>
              <img src={imgSrc} alt={caption} className='rounded-t-md' />
              <div
                className={`md:grow font-bold text-[#000000] text-center rounded-b-md`}
                style={{
                  backgroundColor: captionBackground,
                }}
              >
                <span>{caption}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Activity;
