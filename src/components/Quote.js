
import React from 'react';
import cx from "classnames";
import QuoteIcon from "@/components/QuoteIcon";
import styles from "./quote.module.css";

const Quote = ({
  children,
  color = '#ED6C30',
  width = 47,
  height = 59,
}) => {

  return (
    <span className="relative">
      <span className={styles.before}>
        <QuoteIcon strokeColor={color} className={styles.beforeIcon} styles={{
        }} /></span>
      <span>{children}</span>
      <span className={styles.after}>
        <QuoteIcon strokeColor={color} isCloseQuote className={styles.afterIcon} />
      </span>
    </span>

  );
};

/*
      <QuoteIcon className="absolute" />
      <QuoteIcon isCloseQuote className="absolute bottom-[-24px] right-0 mr-[25px]" />

      */

export default Quote;
