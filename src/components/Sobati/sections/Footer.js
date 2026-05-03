import React from 'react';

export default function Footer() {
  return (
    <div
      id='sobati-footer'
      className='flex flex-col items-center gap-16 pt-32 px-4 pb-16'
    >
      <div className='flex flex-col items-center gap-8'>
        <h2>Schedule an Appointment</h2>
        <p className='text-center'>
          {'Take the first step towards compassionate, comprehensive care'}
        </p>
      </div>

      <div className='flex flex-col gap-8 items-center'>
        <div className='flex gap-2'>
          <img className='my-auto h-6' src='/images/sobati/Call.svg' />
          <p className='font-bold'>{'Call Us'}</p>
          <p className='text-[#1E85A2] font-bold'>{'8605003575'}</p>
        </div>
        <div className='flex gap-2 flex-col md md:flex-row'>
          <div className='flex gap-2 mx-auto'>
            <img className='my-auto h-6' src='/images/sobati/Location.svg' />
            <p className='font-bold'>{'Visit Us'}</p>
          </div>
          <p className='text-[#1E85A2] font-bold'>
            {'Rainbow Day Care, Kothrud'}
          </p>
        </div>
      </div>

      <p className='italic text-[#1E85A2] text-center'>{`"Because compassionate care makes all the difference."`}</p>
    </div>
  );
}
