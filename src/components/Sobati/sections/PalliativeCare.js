import React from 'react';

export default function PalliativeCare() {
  return (
    <div className='flex flex-col gap-4 bg-[#FFFFFF] p-16 mx-4 rounded-xl mb-32 shadow-xl'>
      <h2 className='text-center'>{'What is Palliative Care?'}</h2>
      <p className='text-center'>
        {' '}
        <span className='font-semibold'>{`Palliative care goes beyond treating illness.`}</span>
        {` It's a holistic approach that addresses not only physical symptoms but also the emotional, social, and spiritual wellbeing of patients and their families.`}
      </p>

      {/* Cards */}
      <div className='flex flex-col gap-4 md:flex-row'>
        {/* Physical Care */}
        <div className='flex flex-col gap-[12px] p-[16px] border-[#1E85A2] rounded-md border-l-4 min-h-[180px] '>
          <img className='mx-auto' src='/images/sobati/PhysicalCare.svg' />
          <div className='my-[4px]'>
            <h3 className='text-[#1E85A2] text-center'>{'Physical Care'}</h3>
            <p className='text-base text-center'>{`Managing pain and other distressing symptoms to improve quality of life.`}</p>
          </div>
        </div>

        {/* Emotional Support */}
        <div className='flex flex-col gap-[12px] p-[16px] border-[#1E85A2] rounded-md border-l-4 min-h-[180px] '>
          <img className='mx-auto' src='/images/sobati/EmotionalSupport.svg' />
          <div className='my-[4px]'>
            <h3 className='text-[#1E85A2] text-center'>
              {'Emotional Support'}
            </h3>
            <p className='text-base text-center'>{`Psychological counselling and wellbeing`}</p>
          </div>
        </div>

        {/* Social Connection */}
        <div className='flex flex-col gap-[12px] p-[16px] border-[#1E85A2] rounded-md border-l-4 min-h-[180px] '>
          <img className='mx-auto' src='/images/sobati/SocialConnection.svg' />
          <div className='my-[4px]'>
            <h3 className='text-[#1E85A2] text-center'>
              {'Social Connection'}
            </h3>
            <p className='text-base text-center'>{`Community and caregiver support`}</p>
          </div>
        </div>

        {/* Spiritual Comfort */}
        <div className='flex flex-col gap-[12px] p-[16px] border-[#1E85A2] rounded-md border-l-4 min-h-[180px] '>
          <img className='mx-auto' src='/images/sobati/SpiritualComfort.svg' />
          <div className='my-[4px]'>
            <h3 className='text-[#1E85A2] text-center'>
              {'Spiritual Comfort'}
            </h3>
            <p className='text-base text-center'>{`Peace and dignity at every stage`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
