import { IonContent } from "@ionic/react";
import styles from "./Rules.module.scss";

const Rules: React.FC = () => {
  return (
    <IonContent>
      <div className={styles["players-cards-container"]}>
        Rules of Svara ( svarka ) Swara is a card game that is played with a
        32-card deck - the cards are from 7 to Ace. The minimum number of
        players is two. The total number of combinations in a game is 4960.
        <br />
        <br />
        Each player is dealt three cards in the clockwise direction. Each card
        has a numerical value, defeating this player who has the highest score.{" "}
        <br />
        <br />
        The value of the points is calculated according to the following rules:
        <br />
        <br />
        1) Each card from 7 to 9 is as many points as its number.
        <br /> 2) Cards 10, J, Q, and K wear 10 points.
        <br /> 3) Aces wear 11 points.
        <br />
        4) Cards of one color have as many points as their totals.
        <br /> For example:
        <br />
        Q ♦, K ♦ and 10 ♠ bring a total of 20 points and 10 ♠, 8 ♠ and K ♥ are a
        total of 18 points;
        <br /> 5) Aces can be combined regardless of color, ie. Two aska are 22
        points, three are 33 points 6) 7 ♣ is called "Cezo Yonchev, Checaq,
        Chotora, Hopa or Yoncho," and it can be combined with all other cards,
        bringing in 11 points.
        <br /> 8) Three weeks wear 34 points and is the strongest combination in
        the game.
        <br /> 9) Three identical cards are a combination that has as many
        points as the leader card. For example, three eights carry 24 pieces /
        3x8 = 24 /: three ladies wear 30 pieces / 3x10 = 30 / etc <br />
        <br />
        Examples: <br />7 ♥, 9 ♦ and 9 ♣ bring a total of 9 points (this is the
        weakest hand) 10 ♠, 10 ♦ and 10 ♣ bring a total of 30 points;
        <br /> 8 ♣, K ♥ and 9 ♦ total 10 points;
        <br /> K ♥, 9 ♥ and Q ♣ bring a total of 19 points;
        <br /> Q ♣, Q ♥ and 9 ♦ Wear a total of 10 points; A ♠, A ♦ and 10 ♣
        bring a total of 22 points; 8 ♠, A ♦ and 7 ♣ bring a total of 22 points;
        <br /> 10 ♦, 9 ♦ and J ♦ bring a total of 29 points; Q ♣, Q ♥ and Q ♦
        have a total of 30 points;
        <br />7 ♣, K ♥ and K ♦ have a total of 31 points; 7 ♣, A ♥ and A ♦ bring
        a total of 33 points;
        <br /> 7 and 7 no matter the paint brings a total of 23 points;
        <br />
        <br /> Wagering <br />
        1) Before each handout, each participant pays a certain amount - the
        so-called Input (most often), chip or floor;
        <br /> 2) Before seeing the cards, the first player to the left of the
        dealer has the right to place a certain amount in the dark;
        <br /> 3) If the player at hand wins a sum in the dark, each player next
        to his left is allowed to bet twice in the dark;
        <br /> 4) If any player on the left of the betting player does not
        double the bet, the next player is not allowed to bet in the dark;
        <br /> Betting in the dark is not mandatory;
        <br /> 5) After the cards are dealt, players look at their cards and
        make bets in the order they receive the cards;
        <br /> 6) If there is a set amount in the dark, the first bettor is
        obliged to bet at least twice as high as the amount set in the dark;
        <br /> 7) If a staked player wishes to participate in the game and see
        the cards of the player (s) who have paid and / or increased his bet,
        the bettor in the dark must pay the difference to the full amount of the
        player's bet or raise it;
        <br /> 8) If there is a stack in the dark and no one makes a bet after
        the cards are dealt, the game wins the one who last bet in the dark;
        <br /> 9) The game wins the player with the most points;
        <br /> 10) If there is no betting in the dark and none of the players
        make a bet, the game wins the card dealer and makes the next bet;
        <br /> 11) If two or more players have an equal number of points, boil
        or take off;
        <br /> 12) Welding is a new game in which the stake is one (if three or
        four players have an equal number of points - a third or a quarter) of
        the total amount available in the floor 13) Every player present has the
        right to join the game after he has paid the specified amount.
      </div>
    </IonContent>
  );
};

export default Rules;
