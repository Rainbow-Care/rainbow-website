const TITLE = 'Why Elderly Daycare';
const DESCRIPTION =
  'A conversation with Anuradha Karkare, Founder of Rainbow Daycare';

const ReasonToChoose = ({ className }) => {
  return (
    <section className={className}>
      <div className="container mx-auto">
        <h2 className="text-center md:text-left">{TITLE}</h2>
        <div className='flex flex-col'>
          <p>{DESCRIPTION}</p>
          <div className='min-w min-h-48 bg-[#FFD96C]'>Conversation video</div>
        </div>
      </div>
    </section>
  );
};

export default ReasonToChoose;
