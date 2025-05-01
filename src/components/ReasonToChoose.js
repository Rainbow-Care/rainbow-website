const TITLE = 'Why Elderly Daycare';
const DESCRIPTION =
  'A conversation with Anuradha Karkare, Founder of Rainbow Daycare';

const ReasonToChoose = ({ className }) => {
  return (
    <section className={className}>
      <div className='container mx-auto'>
        <h2 className='text-center md:text-left'>{TITLE}</h2>
        <div className='flex flex-col'>
          <p>{DESCRIPTION}</p>
          <div className='min-h-48 mx-auto'>
            <iframe
              width='560'
              height='315'
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
