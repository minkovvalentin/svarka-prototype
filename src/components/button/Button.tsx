import styles from "./Button.module.scss";

interface Props {
  onClick?: Function;
  className?: string;
  label: string;
}

const Button: React.FC<Props> = ({
  onClick,
  className: providedClass,
  label
}) => {
  return (
    <button
      className={`${styles["button"]} ${providedClass}`}
      onClick={() => (onClick ? onClick() : {})}
    >
      {label}
    </button>
  );
};

export default Button;
