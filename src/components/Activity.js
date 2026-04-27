import Image from 'next/image';

const TITLE = 'Our Activity';

const ACTIVITIES_LIST = [
  {
    imgSrc: '/images/activity/ActivitiesImage1.webp',
    caption: 'Recreating “Starry night”',
    captionBackground: '#FFD96C',
  },
  {
    imgSrc: '/images/activity/ActivitiesImage2.webp',
    caption: 'Dramatics and theatre',
    captionBackground: '#40C0E7',
  },
  {
    imgSrc: '/images/activity/ActivitiesImage3.webp',
    caption: 'Intense concentration exhibited during painting sessions',
    captionBackground: '#ED6C30',
  },
  {
    imgSrc: '/images/activity/ActivitiesImage4.webp',
    caption: 'Building paper chandelier is not child’s play',
    captionBackground: '#F3FFA4',
  },
  {
    imgSrc: '/images/activity/ActivitiesImage5.webp',
    caption: 'Clay modelling by our members',
    captionBackground: '#D7598B',
  },
  {
    imgSrc: '/images/activity/ActivitiesImage6.webp',
    caption: 'An intense musical session',
    captionBackground: '#FFD96C',
  },
  {
    imgSrc: '/images/activity/ActivitiesImage7.webp',
    caption: 'Picnics are worth the hype!',
    captionBackground: '#40C0E7',
  },
  {
    imgSrc: '/images/activity/ActivitiesImage8.webp',
    caption: 'Our family',
    captionBackground: '#ED6C30',
  },
  {
    imgSrc: '/images/activity/ActivitiesImage9.webp',
    caption: 'Outdoor games played with the assistance of staff',
    captionBackground: '#F3FFA4',
  },
  {
    imgSrc: '/images/activity/ActivitiesImage10.webp',
    caption: 'Birthdays are very important here!',
    captionBackground: '#D7598B',
  },
  {
    imgSrc: '/images/activity/ActivitiesImage11.webp',
    caption: 'All set for Diwali!',
    captionBackground: '#FFD96C',
  },
  {
    imgSrc: '/images/activity/ActivitiesImage12.webp',
    caption: 'Art and craft activity guided by our able centre head Mrs Yogini',
    captionBackground: '#40C0E7',
  },
  {
    imgSrc: '/images/activity/ActivitiesImage13.webp',
    caption: 'A very proud creator and her creation',
    captionBackground: '#ED6C30',
  },
  {
    imgSrc: '/images/activity/ActivitiesImage14.webp',
    caption: 'Our little Gannu made by one of our members',
    captionBackground: '#F3FFA4',
  },
  {
    imgSrc: '/images/activity/ActivitiesImage15.webp',
    caption: 'When your friend sings badly or maybe does a great job!',
    captionBackground: '#D7598B',
  },
  {
    imgSrc: '/images/activity/ActivitiesImage16.webp',
    caption: 'Learning how to weave by using paper!',
    captionBackground: '#FFD96C',
  },
  {
    imgSrc: '/images/activity/ActivitiesImage17.webp',
    caption: 'What our meals looks like!',
    captionBackground: '#40C0E7',
  },
  {
    imgSrc: '/images/activity/ActivitiesImage18.webp',
    caption: 'Seesaw is fun!',
    captionBackground: '#ED6C30',
  },
  {
    imgSrc: '/images/activity/ActivitiesImage19.webp',
    caption: 'Hard work pays off!',
    captionBackground: '#F3FFA4',
  },
];

const Activity = ({ className }) => {
  return (
    <section className={className}>
      <div className='text-center mb-10 sticky top-0 w-full py-2 bg-white'>
        <h2>{TITLE}</h2>
      </div>
      <div className='flex flex-col md:grid md:grid-cols-3 gap-[16px]'>
        {ACTIVITIES_LIST.map(({ imgSrc, caption, captionBackground }) => {
          return (
            <div key={caption} className='md:flex md:flex-col'>
              <Image src={imgSrc} alt={caption} width={800} height={600} className='w-full h-auto rounded-t-md' />
              <div
                className={`font-semibold text-[#000000] text-center py-2 rounded-b-md md:grow md:text-base`}
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
