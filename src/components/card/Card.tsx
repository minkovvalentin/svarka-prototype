import { CardInterface } from "../../interfaces/Card";
import styles from "./Card.module.scss";

interface Props {
  card: CardInterface;
}
const Deck: React.FC<Props> = ({
  card: {
    suit,
    value: { value, points },
  },
}) => {
  const getCardColor = (suit: string) => {
    return suit === "♣" || suit === "♠" ? "black" : "red";
  };

  return (
    <div
      className={styles["card-container"]}
      key={`${suit}-${points}-${value}`}
    >
      <div
        className={`${styles["card"]} ${styles[getCardColor(suit)]}`}
        data-value={`${suit} ${value}`}
      >
        {suit}
      </div>
    </div>
  );
};

export default Deck;
