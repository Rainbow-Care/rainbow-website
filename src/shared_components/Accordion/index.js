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
            className='flex flex-row border border-[#B3B3B3] rounded-lg  justify-between gap-2 md:gap-8 bg-[#FCFCFC]'
            key={index}
          >
            <div className='flex flex-col '>
              <span
                className='font-bold text-lg p-4 cursor-pointer text-black'
                onClick={onClickHandler.bind(this, index)}
              >
                {question}
              </span>
              <div hidden={!isExpanded} className='p-4 pt-0 text-base'>
                {answer}
              </div>
            </div>
            <div
              className='p-2 mr-2 flex cursor-pointer'
              onClick={onClickHandler.bind(this, index)}
            >
              <span
                data-id={index}
                className={`self-center inline-block ${styles.accordionIcon} ${
                  isExpanded && styles.accordionIconRotated
                }`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Accordion;
