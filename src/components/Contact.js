import cx from 'classnames';
import Button from './Button';
import { useState } from 'react';

const DETAILS =
  "Get in touch with our team for personalized assistance. Whether you have a question, or want to discuss your specific needs, we're here to help. Share your contact information, and we'll be in touch soon to provide the support you need.";
const RECEPIENT_MAIL = 'rainbow.cfare@gmail.com';

const Contact = ({ className }) => {
  const [contact, setContact] = useState('');
  const [emailBody, setEmailBody] = useState('');

  const sendMail = (e) => {
    window.location.href = `mailto:${RECEPIENT_MAIL}?subject=${encodeURIComponent(
      `Enquiry on Rainbow Day Care - ${contact}`
    )}&body=${encodeURIComponent(emailBody)}`;
    e.preventDefault();

    setContact('');
    setEmailBody('');
  };

  return (
    <section id='contact' className={cx(className, '')}>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row gap-6'>
          {/* Left half */}
          <div className='flex flex-col w-full  gap-6'>
            <h2 className='max-w-[20ch] md:max-w-[30ch] leading-[1.5]'>
              Connect with Us for{' '}
              <span className='text-primary'>Personalized Support</span>
            </h2>
            <p className='text-left  md:max-w-[60ch]'>{DETAILS}</p>
          </div>

          {/* Right half */}
          <div className='flex flex-col w-full  gap-4'>
            <input
              className='border rounded-md py-1 px-3'
              placeholder='Enter Email or Phone Number'
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            ></input>
            <textarea
              className='border rounded-md align-middle py-1 px-3 min-h-[112px]'
              placeholder='Write a message or question (if any)'
              value={emailBody}
              onChange={(e) => setEmailBody(e.target.value)}
            ></textarea>
            <div>
              <Button
                className='w-full md:w-auto'
                text='Send'
                textColorPrimary={false}
                backgroundPrimary={true}
                onClick={sendMail}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
