const TITLE = 'Why Elderly Daycare';
const DESCRIPTION =
  'A conversation with Anuradha Karkare, Founder of Rainbow Daycare';

const ReasonToChoose = ({ className }) => {
  return (
    <section className={className}>
      <h2>{TITLE}</h2>
      <div className='flex flex-col gap-10'>
        <p>{DESCRIPTION}</p>
        <div className='min-w min-h-480 bg-[#FFD96C]'>
          <iframe
            width='1000'
            height='345'
            src='https://www.youtube.com/embed/tgbNymZ7vqY'
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ReasonToChoose;
