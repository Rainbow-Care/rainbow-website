import { useState } from 'react';
import styles from './styles.module.css';

const Accordion = ({ list }) => {
  const [openSections, setOpenSections] = useState(new Set());

  const onClickHandler = (e) => {
    let newOpenSections = new Set(openSections);
    newOpenSections.has(e.target.getAttribute('data-id'))
      ? newOpenSections.delete(e.target.getAttribute('data-id'))
      : newOpenSections.add(e.target.getAttribute('data-id'));

    setOpenSections(newOpenSections);
  };
  return (
    <div className='flex flex-col gap-4'>
      {list.map(({ question, answer }) => {
        const isExpanded = openSections.has(question);

        return (
          <div
            className='flex flex-row border rounded-lg p-4 justify-between gap-8'
            key={question}
          >
            <div className='flex flex-col gap-4'>
              <button
                data-id={question}
                className={`${styles.accordionItemTitle} font-bold`}
                onClick={onClickHandler}
              >
                {question}
              </button>
              <div hidden={!isExpanded}>{answer}</div>
            </div>
            <span
              data-id={question}
              className={`self-center ${styles.accordionIcon} ${
                isExpanded && styles.accordionIconRotated
              }`}
              onClick={onClickHandler}
            />
          </div>
        );
      })}
    </div>
  );
};
export default Accordion;
