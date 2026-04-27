'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import cx from 'classnames';

import Button from './Button';

const navLinks = [
  { link: 'home', display: 'Home' },
  { link: 'opd', display: 'OPD Service' },
  { link: 'gallery', display: 'Gallery' },
];

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const pathname = usePathname();

  const scrollToSection = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className='bg-white border-gray-200'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap items-center justify-between py-4'>
          <Link href='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
            <img
              src='/images/rainbow_logo.svg'
              className='h-[90px]'
              alt='Rainbow Day Care Logo'
            />
          </Link>
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
            aria-controls='navbar-default'
            aria-expanded={!isCollapsed}
            onClick={() => {
              setIsCollapsed((prev) => !prev);
            }}
          >
            <span className='sr-only'>Open main menu</span>

            <svg
              aria-hidden='true'
              focusable='false'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M18 10H6'
                stroke='black'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M21 6H3'
                stroke='black'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M21 14H3'
                stroke='black'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M18 18H6'
                stroke='black'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
          <div
            className={cx('w-full md:block md:w-auto', {
              hidden: isCollapsed,
              relative: isCollapsed,
            })}
            id='navbar-default'
          >
            <ul
              className={cx(
                'flex flex-col items-center p-4 h-fit md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white text-base'
              )}
            >
              {navLinks.map(({ link, display }) => (
                <li key={link}>
                  <Link
                    href={`/${link === 'home' ? '' : link}`}
                    className={`${
                      pathname === `/${link === 'home' ? '' : link}` ? 'text-[#1e85a2] font-bold' : ''
                    } block py-2 px-3 rounded md:bg-transparent md:p-0`}
                    aria-current={pathname === `/${link === 'home' ? '' : link}` ? 'page' : undefined}
                  >
                    {display}
                    {pathname === `/${link === 'home' ? '' : link}` && (
                      <svg
                        aria-hidden='true'
                        focusable='false'
                        xmlns='http://www.w3.org/2000/svg'
                        width='auto'
                        height='4'
                        className='absolute'
                        viewBox='0 0 auto 4'
                        fill='none'
                      >
                        <path
                          d={`M2 2 H${display.length * 8}`}
                          stroke='#1e85a2'
                          strokeWidth='3'
                          strokeLinecap='round'
                        />
                      </svg>
                    )}
                  </Link>
                </li>
              ))}
              <li>
                <Button
                  textColorPrimary={false}
                  backgroundPrimary={true}
                  text='Contact Us'
                  className='py-1 text-xs'
                  onClick={scrollToSection}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
