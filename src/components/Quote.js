
import React from 'react';
import QuoteIcon from "@/components/QuoteIcon";
import "./quote.css";

const Quote = ({
  children,
  color = '#ED6C30',
  width = 47,
  height = 59,
}) => {

  return (
    <span className="relative">
      <span className="relative before">
        <QuoteIcon strokeColor={color} className="before-icon" styles={{
        }} /></span>
      <span>{children}</span>
      <span className="after relative">
        <QuoteIcon strokeColor={color} isCloseQuote className="after-icon" />
      </span>
    </span>

  );
};

/*
      <QuoteIcon className="absolute" />
      <QuoteIcon isCloseQuote className="absolute bottom-[-24px] right-0 mr-[25px]" />

      */

export default Quote;
