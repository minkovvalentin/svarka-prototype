import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Deck from "../../components/deck/Deck";
import "./Game.css";

const Page: React.FC = () => {

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

        <Deck/>
      </IonContent>
    </IonPage>
  );
};

export default Page;
