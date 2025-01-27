const Button = ({ props }) => {
  const { text, textColorPrimary, backgroundPrimary } = props;

  return (
    <button
      class={`rounded-md font-bold py-2 h-fit text-nowrap border-2 border-colorPrimary ${
        textColorPrimary ? `text-colorPrimary` : `text-colorSecondary`
      } ${
        backgroundPrimary ? `bg-colorPrimary px-3` : `bg-isTransparent px-5`
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
