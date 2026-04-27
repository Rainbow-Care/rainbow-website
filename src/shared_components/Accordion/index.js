'use client';

import { useState } from 'react';
import styles from './styles.module.css';

const Accordion = ({ list }) => {
  const [openSections, setOpenSections] = useState(new Set());

  const onClickHandler = (faqIdx, e) => {
    let newOpenSections = new Set(openSections);
    newOpenSections.has(faqIdx)
      ? newOpenSections.delete(faqIdx)
      : newOpenSections.add(faqIdx);

    setOpenSections(newOpenSections);
  };
  return (
    <div className='flex flex-col gap-4'>
      {list.map(({ question, answer }, index) => {
        const isExpanded = openSections.has(index);

        return (
          <div
            className='flex flex-col border border-[#B3B3B3] rounded-lg bg-[#FCFCFC]'
            key={index}
          >
            <h3 className='flex m-0'>
              <button
                type='button'
                aria-expanded={isExpanded}
                aria-controls={`accordion-content-${index}`}
                id={`accordion-header-${index}`}
                className='flex w-full justify-between items-center font-bold text-lg p-4 text-black text-left focus:outline-none focus:ring-2 focus:ring-[#1E85A2] rounded-lg cursor-pointer'
                onClick={onClickHandler.bind(this, index)}
              >
                <span>{question}</span>
                <span
                  className={`flex-shrink-0 ml-4 ${styles.accordionIcon} ${
                    isExpanded ? styles.accordionIconRotated : ''
                  }`}
                  aria-hidden='true'
                />
              </button>
            </h3>
            <div
              id={`accordion-content-${index}`}
              role='region'
              aria-labelledby={`accordion-header-${index}`}
              hidden={!isExpanded}
              className='p-4 pt-0 text-base'
            >
              <p className='m-0'>{answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Accordion;
