import React from 'react';

export default function NeedForSobati() {
  return (
    <div
      className='flex flex-col gap-16 bg-[#FFFFFF] p-16 mx-4 rounded-xl mb-32 shadow-2xl pb-24
'
    >
      <h2 className='text-center md:text-left'>{'Why Sobati?'}</h2>
      <p className='text-center leading-[180%] md:text-left'>{`As life expectancy increases, many elderly individuals live with chronic conditions like heart disease, asthma, cancer, Parkinson's, and dementia. These conditions require continuous care—not just for patients, but for their families too.
Sobati is here to provide that support. More than medical care, we offer companionship through life's most challenging journey`}</p>
      <p className='text-center text-[#1E85A2] font-semibold bg-[#E0F8FF] p-3 rounded-md border-l-4 md:text-left md:p-4'>{`“ At this  stage of life, we are your Sobati (your companion) “`}</p>
    </div>
  );
}
