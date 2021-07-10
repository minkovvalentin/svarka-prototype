import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import Button from "../../components/button/Button";
import Deck from "../../components/deck/Deck";
import Play from "../../components/play/Play";
import Rules from "../../components/rules/Rules";
import styles from "./Game.module.scss";

type contentType = "play" | "deck" | "rules";

const Page: React.FC = () => {
  const [content, setContent] = useState<contentType>("play");

  const getContent = (currentContent: contentType): JSX.Element => {
    switch (currentContent) {
      case "deck":
        return <Deck />;
      case "play":
        return <Play />;
      case "rules":
        return <Rules/>;
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
          <IonTitle>Svara</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* TO DO: Find out why we need header, toolbar, title. They don't seem to change much */}
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Svara</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className={styles["content-selection-container"]}>
          {[
            { label: "Play", onClick: () => setContent("play") },
            { label: "Deck", onClick: () => setContent("deck") },
            { label: "Rules", onClick: () => setContent("rules") },
          ].map(({ label, onClick }: any) => {
            return (
              <Button
                key={`${label}`}
                className="select-content-btn"
                onClick={onClick}
                label={label}
                active={content === label.toLowerCase()}
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
