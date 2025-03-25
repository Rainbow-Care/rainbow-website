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
      <div className='justify-self-center mb-6'>
        <h2>{TITLE}</h2>
      </div>
      <div className='grid grid-cols-3 gap-6'>
        {HAPPY_MEMBERS_LIST.map(
          ({ imgSrc, caption, captionBackground }, index) => {
            return (
              <div key={index}>
                <img src={imgSrc} alt={caption} className='rounded-t-md' />
                <div
                  className={`h-[48px] text-center rounded-b-md`}
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
