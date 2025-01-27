import { useState } from 'react';
import Link from 'next/link';
import cx from 'classnames';

const navLinks = [
  { link: 'home', display: 'Home' },
  { link: 'gallery', display: 'Gallery' },
  { link: 'patient_portal', display: 'Patient Portal' },
  { link: 'about_us', display: 'About Us' },
];

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <nav class='bg-white border-gray-200'>
      <div class='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href='/' class='flex items-center space-x-3 rtl:space-x-reverse'>
          <img
            src='/images/rainbow_logo.svg'
            class='h-[90px]'
            alt='Flowbite Logo'
          />
        </a>
        <button
          data-collapse-toggle='navbar-default'
          type='button'
          class='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
          aria-controls='navbar-default'
          aria-expanded='false'
          onClick={() => {
            setIsCollapsed((prev) => !prev);
          }}
        >
          <span class='sr-only'>Open main menu</span>

          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M18 10H6'
              stroke='black'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M21 6H3'
              stroke='black'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M21 14H3'
              stroke='black'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M18 18H6'
              stroke='black'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </button>
        <div
          class={cx('w-full md:block md:w-auto', {
            hidden: isCollapsed,
            relative: isCollapsed,
          })}
          id='navbar-default'
        >
          <ul
            class={cx(
              'flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white text-base'
            )}
          >
            {navLinks.map(({ link, display }) => (
              <li key={link}>
                <Link
                  href='#'
                  class='block py-2 px-3 rounded md:bg-transparent md:p-0'
                  aria-current='page'
                >
                  {display}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import Image from "next/image";

const Navbar = () => {
  return (
    <div class="flex flex-row">
      <Image
        src="/images/RainbowDayCareLogo.svg"
        width={200}
        height={200}
        alt="Logo of Rainbow Day Care"
      ></Image>
      <div class="flex flex-row w-full">
        <div class="flex flex-row">
          <a>Home</a>
          <a>Testimonials</a>
          <a>Gallery</a>
          <a>Patient Portal</a>
          <a>About Us</a>
        </div>
        <button class="h-33 w-117" color="#1e85a2">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
