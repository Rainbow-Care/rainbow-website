import cx from 'classnames';
import Button from './Button';

const DETAILS =
  "Get in touch with our team for personalized assistance. Whether you have a question, or want to discuss your specific needs, we're here to help. Share your contact information, and we'll be in touch soon to provide the support you need.";

const Contact = ({ className }) => {
  return (
    <section className={cx(className, '')}>
      <div className='flex gap-4'>
        {/* Left half */}
        <div className='flex flex-col w-8/12 gap-4'>
          <h2>
            Connect with Us for{' '}
            <span className='text-colorPrimary'>Personalized Support</span>
          </h2>
          <p className='text-left'>{DETAILS}</p>
        </div>

        {/* Right half */}
        <div className='flex flex-col w-4/12 gap-4'>
          <input
            className='border rounded-md p-1'
            placeholder='Enter Email or Phone Number'
          ></input>
          <textarea
            className='border rounded-md p-2 min-h-[112px]'
            placeholder='Write a message or question (if any)'
          ></textarea>
          <div>
            <Button
              props={{
                text: 'Send',
                textColorPrimary: false,
                backgroundPrimary: true,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
