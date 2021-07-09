import styles from "./Button.module.scss";

interface Props {
  onClick?: Function;
  className?: string;
}

const Button: React.FC<Props> = ({ onClick, className:providedClass }) => {
  return (
      <button className={`${styles['button']} ${providedClass}`} onClick={() => (onClick ? onClick() : {})}>Shuffle</button>
  );
};

export default Button;
