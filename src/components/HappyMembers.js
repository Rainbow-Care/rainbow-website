const TITLE = 'Happy Members';

const HAPPY_MEMBERS_LIST = [
  {
    imgSrc: '/images/happyMembers/HappyMember1.jpg',
    caption: '',
    captionBackground: '#D7598B',
  },
  {
    imgSrc: '/images/happyMembers/HappyMember2.jpg',
    caption: '',
    captionBackground: '#40C0E7',
  },
  {
    imgSrc: '/images/happyMembers/HappyMember3.jpg',
    caption: '',
    captionBackground: '#ED6C30',
  },
  {
    imgSrc: '/images/happyMembers/HappyMember4.jpg',
    caption: '',
    captionBackground: '#F3FFA4',
  },
  {
    imgSrc: '/images/happyMembers/HappyMember5.jpg',
    caption: '',
    captionBackground: '#D7598B',
  },
  {
    imgSrc: '/images/happyMembers/HappyMember6.jpg',
    caption: '',
    captionBackground: '#F3FFA4',
  },
  {
    imgSrc: '/images/happyMembers/HappyMember7.jpg',
    caption: '',
    captionBackground: '#D7598B',
  },
];

const HappyMembers = ({ className }) => {
  return (
    <section className={className}>
      <div className='text-center py-2 mb-6 sticky top-0 md:w-full bg-white'>
        <h2>{TITLE}</h2>
      </div>
      <div className='flex flex-col md:grid md:grid-cols-3 gap-[16px] scroll-mt-[6] snap-y snap-start snap-always'>
        {HAPPY_MEMBERS_LIST.map(
          ({ imgSrc, caption, captionBackground }, index) => {
            return (
              <div key={index} className='md:flex md:flex-col'>
                <img src={imgSrc} alt={caption} className='rounded-t-md' />
                <div
                  className={`min-h-[48px] md:grow rounded-b-md`}
                  style={{ backgroundColor: captionBackground }}
                >
                  {caption}
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default HappyMembers;
