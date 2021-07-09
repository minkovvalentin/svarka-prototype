import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Deck from "../../components/deck/Deck";
import styles from "./Game.module.scss";

type contentType = "deck" | "play" | "rules";

const Page: React.FC = () => {
  const [content, setContent] = useState<contentType>("deck");

  const getContent = (currentContent: contentType): JSX.Element => {
    switch (currentContent) {
      case "deck":
        return <Deck />;
      case "play":
        return <p>Lets play</p>;
      case "rules":
        return <p>The rules are there are no rules</p>;
    }
    return <></>;
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Svarka</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* TO DO: Find out why we need header, toolbar, title. They don't seem to change much */}
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Svarka</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className={styles["content-selection-container"]}>
          {[
            { label: "Deck", onClick: () => setContent("deck") },
            { label: "Play", onClick: () => setContent("play") },
            { label: "Rules", onClick: () => setContent("rules") },
          ].map(({ label, onClick }: any) => {
            return (
              <Button
                className="select-content-btn"
                onClick={onClick}
                label={label}
              />
            );
          })}
        </div>

        {getContent(content)}
      </IonContent>
    </IonPage>
  );
};

export default Page;
