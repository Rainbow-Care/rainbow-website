import React from 'react';

import Button from '@/components/Button';

export default function Header() {
  return (
    <div className='flex flex-col items-center gap-4 pt-32 px-4 mb-32'>
      <p className='text-center'>
        {'Sobati - Compassionate Care for the Elderly'}
      </p>
      <h1 className='text-center'>
        {'Specialized Geriatrics & Palliative Care OPD'}
      </h1>
      <Button
        text='Schedule an appointment'
        textColorPrimary={false}
        backgroundPrimary
      />
    </div>
  );
}
