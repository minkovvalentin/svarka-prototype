import { useEffect } from "react";
import styles from "./Button.module.scss";

interface Props {
  onClick?: Function;
  className?: string;
  label: string;
  active?: boolean;
}

const Button: React.FC<Props> = ({
  onClick,
  className: providedClass,
  label,
  active,
}) => {
  return (
    <button
      className={`${styles["button"]} ${providedClass} ${
        active ? styles["active"] : ""
      }`}
      onClick={() => (onClick ? onClick() : {})}
    >
      {label}
    </button>
  );
};

export default Button;
