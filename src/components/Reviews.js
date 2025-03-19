const TITLE = 'What Our Families Say About Us';

const Reviews = ({ className }) => {
  return (
    <section className={className}>
      <h2>{TITLE}</h2>
      <div className='flex flex-col'>
        <div className='min-w min-h-48 bg-[#FFD96C]'></div>
      </div>
    </section>
  );
};

export default Reviews;
