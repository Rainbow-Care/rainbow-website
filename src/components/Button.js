const Button = ({ props }) => {
  const { text, textColorPrimary, backgroundPrimary } = props;

  return (
    <button
      class={`rounded-sm h-fit ${
        textColorPrimary ? `text-colorPrimary` : `text-colorSecondary`
      } ${
        backgroundPrimary
          ? `bg-colorPrimary`
          : `bg-isTransparent border-2 border-colorPrimary`
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
