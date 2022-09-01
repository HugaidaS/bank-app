type Props = {
  styles: string;
  text: string;
};

const Button = ({ styles, text }: Props) => {
  return (
    <button
      type="button"
      className={`font-poppins font-medium text-primary text-[18px] outline-none py-4 px-6 bg-blue-gradient ${styles}`}
    >
      {text}
    </button>
  );
};

export default Button;
