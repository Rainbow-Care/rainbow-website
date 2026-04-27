import cx from 'classnames';
import Accordion from '@/shared_components/Accordion';

const questionList = [
  {
    question: 'What services do you provide for seniors?',
    answer:
      'Rainbow Day Care Centre provides comprehensive elderly day care services in Pune, including daily structured activities like art, music, and games, nutritious meals tailored to dietary needs, continuous health monitoring by trained staff, and a safe environment for socialisation.',
  },
  {
    question: 'How do I enroll my loved one?',
    answer:
      'Enrolling your loved one at Rainbow Day Care Centre is easy. You can schedule an initial visit with our admissions team by calling us at 8605003575 or by filling out the online contact form on our website. We will walk you through an assessment to ensure our care matches your needs.',
  },
  {
    question: 'What are your operating hours?',
    answer:
      'Our day care centre in Kothrud, Pune is open Monday through Friday from 8:00 AM to 6:00 PM. We offer flexible scheduling options to accommodate the varying needs of working families and their elderly parents.',
  },
  {
    question: 'Is transportation assistance available?',
    answer:
      'Yes, we provide safe and reliable transportation assistance for our senior members across select areas in Pune. Please discuss your location with our team during admission to check route availability.',
  },
  {
    question: 'Are meals provided at the center?',
    answer:
      'Absolutely. We serve freshly prepared, nutritious meals and snacks daily. Our meal plans are tailored to meet the specific dietary and medical needs of our senior members, ensuring they enjoy healthy and delicious food.',
  },
  {
    question: 'What safety and medical measures are in place?',
    answer:
      'We prioritize the safety and well-being of our seniors with dedicated, trained caregivers, continuous health monitoring, emergency response protocols, and a secure, mobility-friendly environment specially designed for the elderly.',
  },
];

const Questions = ({ className }) => {
  return (
    <section className={cx(className, '')}>
      <div className='flex flex-col gap-8'>
        <h2>
          {'Your Most Common'}{' '}
          <span className='text-colorPrimary'>{'Questions'}</span>
        </h2>
        <Accordion list={questionList} />
      </div>
    </section>
  );
};

export default Questions;
