import Link from 'next/link';
import cx from 'classnames';

const links = [
  { link: 'home', display: 'Home' },
  { link: 'gallery', display: 'Gallery' },
  { link: 'contact_us', display: 'Contact Us' },
];

const text = 'Rainbow day care centre. All rights reserved 2025';

const Footer = ({ className }) => {
  return (
    <section className={cx(className, '')}>
      <div className='w-full p-2 bg-[#ffd96c4d]'>
        <div className='container mx-auto flex flex-col gap-6 md:flex-row md:mt-4 md:justify-between'>
          {/* For medium screen and above */}
          <div className='flex flex-col gap-4 md:flex-row md:gap-8'>
            {/* Links */}
            <div className='flex flex-col mt-5 gap-2 md:mt-1'>
              <div className='font-bold'>Links</div>
              <div className='flex flex-row gap-4 md:flex-col md:gap-2'>
                {links.map(({ link, display }) => {
                  return (
                    <div key={link}>
                      <Link
                        href={`/${link === 'home' ? '' : link}`}
                        aria-current='page'
                      >
                        <span className='md:font-medium md:text-base'>
                          {display}
                        </span>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Socials */}
            <div className='flex flex-col gap-4 md:mt-1 md:gap-4'>
              <div className='font-bold'>Socials</div>
              <div className='flex flex-row gap-4 md:flex-col md:gap-4'>
                <Link
                  href={``}
                  className='-translate-x-[8px]'
                  aria-current='page'
                >
                  <img src='/images/facebook.svg' alt='Facebook link'></img>
                </Link>
                <Link href={``} aria-current='page'>
                  <img src='/images/instagram.svg' alt='Instagram link'></img>
                </Link>
                <Link
                  href={``}
                  className='translate-x-[8px] md:translate-x-[1px] md:-translate-y-[4px]'
                  aria-current='page'
                >
                  <img src='/images/youtube.svg' alt='Youtube link'></img>
                </Link>
              </div>
            </div>
          </div>
          {/* Logo section */}
          <div className='flex flex-row justify-between items-end md:order-first md:flex-col md:items-start'>
            <img
              src='/images/rainbow_logo_footer.png'
              className='max-h-[180px] max-w-[160px] md:max-h-[300px] md:max-w-[280px] -translate-x-[24px] translate-y-[28px] md:-translate-x-[44px] md:-translate-y-[50px]'
              alt='Flowbite Logo'
            />
            <div className='flex flex-row text-xs pb-2 md:pb-0'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM12 7C12.7093 6.9999 13.4105 7.15072 14.0571 7.44244C14.7036 7.73416 15.2807 8.16011 15.75 8.692C15.9256 8.89091 16.0149 9.15142 15.9984 9.41623C15.9819 9.68103 15.8609 9.92843 15.662 10.104C15.4631 10.2796 15.2026 10.3689 14.9378 10.3524C14.673 10.3359 14.4256 10.2149 14.25 10.016C13.847 9.55889 13.3143 9.23536 12.7229 9.08846C12.1315 8.94157 11.5093 8.97827 10.9393 9.19368C10.3692 9.4091 9.87827 9.79301 9.53179 10.2943C9.18531 10.7957 8.99972 11.3906 8.99972 12C8.99972 12.6094 9.18531 13.2043 9.53179 13.7057C9.87827 14.207 10.3692 14.5909 10.9393 14.8063C11.5093 15.0217 12.1315 15.0584 12.7229 14.9115C13.3143 14.7646 13.847 14.4411 14.25 13.984C14.4256 13.7851 14.673 13.6641 14.9378 13.6476C15.2026 13.6311 15.4631 13.7204 15.662 13.896C15.8609 14.0716 15.9819 14.319 15.9984 14.5838C16.0149 14.8486 15.9256 15.1091 15.75 15.308C15.1973 15.9345 14.4964 16.4124 13.7114 16.6983C12.9264 16.9841 12.0822 17.0687 11.2561 16.9442C10.43 16.8198 9.64821 16.4904 8.98219 15.986C8.31618 15.4817 7.78715 14.8185 7.44345 14.057C7.09975 13.2956 6.95232 12.4601 7.01465 11.627C7.07697 10.7939 7.34705 9.98969 7.80022 9.28784C8.25338 8.58599 8.87519 8.00888 9.60883 7.60923C10.3425 7.20957 11.1646 7.00012 12 7Z'
                  fill='black'
                />
              </svg>
              <div className='self-center font-medium'>{text}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
