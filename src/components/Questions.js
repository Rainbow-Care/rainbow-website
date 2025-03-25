import cx from 'classnames';
import Accordion from '@/shared_components/Accordion';

const questionList = [
  {
    question: 'What services do you provide for seniors?',
    answer: 'Elderly Day Care services.',
  },
  {
    question: 'How do I enroll my loved one?',
    answer:
      'Enrolling your loved one is easy! Fill out our online application form or contact our admissions team for assistance. We’ll guide you through each step of the process to ensure a smooth transition.',
  },
  {
    question: 'What are your operating hours?',
    answer:
      'Our center is open Monday through Friday from 8:00 AM to 6:00 PM, offering flexible scheduling options to accommodate the needs of families and their loved ones.',
  },
  {
    question: 'Is there a patient portal?',
    answer:
      'Yes, we provide a secure patient portal that allows families to access important information, schedule appointments, and communicate with our staff easily.',
  },
  {
    question: 'Are meals provided at the center?',
    answer:
      'Absolutely! We offer nutritious meals and snacks tailored to meet the dietary needs of our seniors, ensuring they enjoy healthy and delicious food every day.',
  },
  {
    question: 'What safety measures are in place?',
    answer:
      'We prioritize the safety and well-being of our seniors with trained staff, emergency protocols, and a secure environment to ensure peace of mind for families.',
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
