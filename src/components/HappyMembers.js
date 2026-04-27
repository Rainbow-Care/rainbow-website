import Image from 'next/image';

const TITLE = 'Happy Members';

const HAPPY_MEMBERS_LIST = [
  {
    imgSrc: '/images/happyMembers/HappyMember1.webp',
    caption: '',
    alt: 'Smiling elderly woman engaging in a day care activity',
    captionBackground: '#D7598B',
  },
  {
    imgSrc: '/images/happyMembers/HappyMember2.webp',
    caption: '',
    alt: 'Senior man actively participating in a group session',
    captionBackground: '#40C0E7',
  },
  {
    imgSrc: '/images/happyMembers/HappyMember3.webp',
    caption: '',
    alt: 'Joyful elderly lady showing her artwork',
    captionBackground: '#ED6C30',
  },
  {
    imgSrc: '/images/happyMembers/HappyMember4.webp',
    caption: '',
    alt: 'Senior citizen enjoying social time at the centre',
    captionBackground: '#F3FFA4',
  },
  {
    imgSrc: '/images/happyMembers/HappyMember5.webp',
    caption: '',
    alt: 'Happy elderly woman at Rainbow Day Care',
    captionBackground: '#D7598B',
  },
  {
    imgSrc: '/images/happyMembers/HappyMember6.webp',
    caption: '',
    alt: 'Senior group celebrating a festive occasion together',
    captionBackground: '#F3FFA4',
  },
  {
    imgSrc: '/images/happyMembers/HappyMember7.webp',
    caption: '',
    alt: 'Smiling senior citizen proudly holding a craft item',
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
          ({ imgSrc, caption, alt, captionBackground }, index) => {
            return (
              <div key={index} className='md:flex md:flex-col'>
                <Image src={imgSrc} alt={alt || caption} width={800} height={600} className='w-full h-auto rounded-t-md' />
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
