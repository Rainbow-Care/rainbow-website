const TITLE = 'Why Elderly Daycare';
const DESCRIPTION =
  'A conversation with Anuradha Karkare, Founder of Rainbow Daycare';

const ReasonToChoose = ({ className }) => {
  return (
    <section className={className}>
      <div className='container mx-auto'>
        <h2 className='text-center mb-4 md:text-left'>{TITLE}</h2>
        <div className='flex flex-col'>
          <p className=' mx-auto md:mx-0 md:mr-auto text-center md:text-left'>
            {DESCRIPTION}
          </p>
          <div className='min-h-[200px] mt-8 w-full mx-auto'>
            <iframe
              style={{
                aspectRatio: '16 / 9',
                width: '100%',
              }}
              src='https://www.youtube-nocookie.com/embed/9JV6FrDrbH8?si=uLwwtJh7bhvBH3Eu'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerpolicy='strict-origin-when-cross-origin'
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReasonToChoose;
