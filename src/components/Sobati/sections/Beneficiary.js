import React from 'react';

export default function Beneficiary() {
  return (
    <div className='flex flex-col gap-16 bg-[#FFFFFF] p-16 pb-32 mx-4 rounded-xl mb-32 shadow-2xl'>
      <h2 className='text-center'>{'Who Can Benefit?'}</h2>
      {/* Cards */}
      <div className='flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-evenly'>
        {/* Elderly with Chronic Illness */}
        <div className='flex flex-col gap-[12px] p-[16px] border-[#1E85A2] rounded-md border-l-4 min-h-[180px] md:h-[174px] md:w-[325px]'>
          <img className='mx-auto' src='/images/sobati/ChronicIllness.svg' />
          <div className='my-[4px]'>
            <h3 className='text-[#1E85A2] text-center'>
              {'Elderly with Chronic Illness'}
            </h3>
            <p className='text-base text-center'>{`Expert care for long-term conditions`}</p>
          </div>
        </div>

        {/* Seniors Experiencing Weakness */}
        <div className='flex flex-col gap-[12px] p-[16px] border-[#1E85A2] rounded-md border-l-4 min-h-[180px] md:h-[174px] md:w-[325px]'>
          <img className='mx-auto' src='/images/sobati/Seniors.svg' />
          <div className='my-[4px]'>
            <h3 className='text-[#1E85A2] text-center'>
              {'Seniors Experiencing Weakness'}
            </h3>
            <p className='text-base text-center'>{`Support for age-related challenges`}</p>
          </div>
        </div>

        {/* Family Caregivers
         */}
        <div className='flex flex-col gap-[12px] p-[16px] border-[#1E85A2] rounded-md border-l-4 min-h-[180px] md:h-[174px] md:w-[325px]'>
          <img className='mx-auto' src='/images/sobati/Caregivers.svg' />
          <div className='my-[4px]'>
            <h3 className='text-[#1E85A2] text-center'>
              {'Family Caregivers'}
            </h3>
            <p className='text-base text-center'>{`Guidance and training for home care`}</p>
          </div>
        </div>

        {/* Families Seeking Support
         */}
        <div className='flex flex-col gap-[12px] p-[16px] border-[#1E85A2] rounded-md border-l-4 min-h-[180px] md:h-[174px] md:w-[325px]'>
          <img className='mx-auto' src='/images/sobati/Families.svg' />
          <div className='my-[4px]'>
            <h3 className='text-[#1E85A2] text-center mb-[4px]'>
              {'Families Seeking Support'}
            </h3>
            <p className='text-base text-center'>{`Help navigating complex care decisions`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
