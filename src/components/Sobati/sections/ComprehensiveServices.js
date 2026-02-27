import React from 'react';

export default function ComprehensiveServices() {
  return (
    <div className='flex flex-col gap-4 bg-[#FFFFFF] p-16 mx-4 rounded-xl mb-32 shadow-2xl'>
      <h2 className='text-center'>{'Our Comprehensive Services'}</h2>
      {/* Cards */}
      <div className='flex flex-col gap-4 md:flex-row'>
        {/* Pain & Symptom Management */}
        <div className='flex flex-col gap-[12px] p-[16px] border-[#1E85A2] rounded-md border-l-4 min-h-[180px]'>
          <img className='mx-auto my-[4px]' src='/images/sobati/Pain.svg' />
          <div className='my-[4px]'>
            <h3 className='text-[#1E85A2] text-center mb-[4px]'>
              {'Pain & Symptom Management'}
            </h3>
            <p className='text-base text-center'>{`Expert care to ease discomfort and distressing symptoms`}</p>
          </div>
        </div>
        {/* Physioterapy */}
        <div className='flex flex-col gap-[12px] p-[16px] border-[#1E85A2] rounded-md border-l-4 min-h-[180px]'>
          <img
            className='mx-auto my-[4px]'
            src='/images/sobati/PhysicalCare.svg'
          />
          <div className='my-[4px]'>
            <h3 className='text-[#1E85A2] text-center mb-[4px]'>
              {'Physioterapy'}
            </h3>
            <p className='text-base text-center'>{`Maintain mobility and independence`}</p>
          </div>
        </div>
        {/* Nursing Support */}
        <div className='flex flex-col gap-[12px] p-[16px] border-[#1E85A2] rounded-md border-l-4 '>
          <img
            className='mx-auto my-[4px]'
            src='/images/sobati/ChronicIllness.svg'
          />
          <div className='my-[4px]'>
            <h3 className='text-[#1E85A2] text-center mb-[4px]'>
              {'Nursing Support'}
            </h3>
            <p className='text-base text-center'>{`Professional care tailored to individual needs`}</p>
          </div>
        </div>
        {/* Counselling Services */}
        <div className='flex flex-col gap-[12px] p-[16px] border-[#1E85A2] rounded-md border-l-4 '>
          <img
            className='mx-auto my-[4px]'
            src='/images/sobati/CounsellingServices.svg'
          />
          <div className='my-[4px]'>
            <h3 className='text-[#1E85A2] text-center mb-[4px]'>
              {'Counselling Services'}
            </h3>
            <p className='text-base text-center'>{`Emotional support for patients and families
`}</p>
          </div>
        </div>
        {/* Caregiver Training */}
        <div className='flex flex-col gap-[12px] p-[16px] border-[#1E85A2] rounded-md border-l-4 '>
          <img
            className='mx-auto my-[4px]'
            src='/images/sobati/CaregiverTraining.svg'
          />
          <div className='my-[4px]'>
            <h3 className='text-[#1E85A2] text-center mb-[4px]'>
              {'Caregiver Training'}
            </h3>
            <p className='text-base text-center'>{`Practical guidance for effective home care
`}</p>
          </div>
        </div>
        {/* Care Planning */}
        <div className='flex flex-col gap-[12px] p-[16px] border-[#1E85A2] rounded-md border-l-4 '>
          <img
            className='mx-auto my-[4px]'
            src='/images/sobati/CarePlanning.svg'
          />
          <div className='my-[4px]'>
            <h3 className='text-[#1E85A2] text-center mb-[4px]'>
              {'Care Planning'}
            </h3>
            <p className='text-base text-center'>{`Proactive strategies to prevent disease progression
`}</p>
          </div>
        </div>
        {/* Home Care Coordination */}
        <div className='flex flex-col gap-[12px] p-[16px] border-[#1E85A2] rounded-md border-l-4 min-h-[180px]'>
          <img className='mx-auto my-[4px]' src='/images/sobati/HomeCare.svg' />
          <div className='my-[4px]'>
            <h3 className='text-[#1E85A2] text-center mb-[4px]'>
              {'Home Care Coordination'}
            </h3>
            <p className='text-base text-center'>{`Assistance arranging services when needed
`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
