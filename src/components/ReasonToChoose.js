const Title = 'Why Elderly Daycare';
const Description =
  'A conversation with Anuradha Karkare, Founder of Rainbow Daycare';

const ReasonToChoose = ({ className }) => {
  return (
    <section className={className}>
      <h2>{Title}</h2>
      <div className='flex flex-col'>
        <p>{Description}</p>
        <div className='min-w min-h-48 bg-[#FFD96C]'>Conversation video</div>
      </div>
    </section>
  );
};

export default ReasonToChoose;
