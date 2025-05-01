const servicesData = [
  {
    icon: 'activity',
    title: 'Daily Activites',
    text: 'Engaging routines that enrich the lives of our participants every day.',
  },
  {
    icon: 'staff',
    title: 'Compassionate Staff',
    text: 'Our trained caregivers provide loving support and companionship.',
  },
  {
    icon: 'env',
    title: 'Safe Environment',
    text: 'A secure and welcoming space promoting comfort and well-being.',
  },
  {
    icon: 'meals',
    title: 'Nutritious Meals',
    text: 'Delicious and healthy meals prepared with dietary needs in mind.',
  },
  {
    icon: 'monitor',
    title: 'Health Monitoring',
    text: 'Regular assessments ensure optimal health and wellness for all participants.',
  },
  {
    icon: 'services',
    title: 'Transportation Services',
    text: 'Engaging routines that enrich the lives of our participants every day.',
  },
];

const Services = ({ className, data = servicesData }) => {
  return (
    <section className={className}>
      <div className='container mx-auto'>
        <h2 className='text-center md:text-left'>Care Tailored for You</h2>
        <div className='grid md:grid-cols-3 gap-x-2 gap-y-12 mt-16'>
          {data.map(({ icon, title, text }, idx) => (
            <ServiceCard
              key={`${idx}-{title}`}
              icon={icon}
              title={title}
              text={text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, text }) => {
  return (
    <div className='flex flex-col place-items-center gap-4'>
      <img
        src={`/images/services/${icon}.svg`}
        className='w-10 h-10'
        alt={`${icon} icon`}
      />
      <h3>{title}</h3>
      <p className='text-center text-base  w-[28ch]'>{text}</p>
    </div>
  );
};

export default Services;
