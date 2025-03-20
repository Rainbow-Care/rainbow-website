const TITLE = 'Why Elderly Daycare';
const DESCRIPTION =
  'A conversation with Anuradha Karkare, Founder of Rainbow Daycare';

const ReasonToChoose = ({ className }) => {
  return (
    <section className={className}>
      <h2>{TITLE}</h2>
      <div className='flex flex-col'>
        <p>{DESCRIPTION}</p>
        <div className='min-w min-h-48 bg-[#FFD96C]'>Conversation video</div>
      </div>
    </section>
  );
};

export default ReasonToChoose;
