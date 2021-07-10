import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
  gameControllerOutline,
  gameControllerSharp,
  settingsOutline,
  settingsSharp,
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Svara",
    url: "/game",
    iosIcon: gameControllerOutline,
    mdIcon: gameControllerSharp,
  },
  {
    title: "Settings",
    url: "/settings",
    iosIcon: settingsOutline,
    mdIcon: settingsSharp,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Profile</IonListHeader>
          <IonNote>igracho@abv.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            provident ipsam, voluptates id veritatis delectus nisi vitae illum
            aperiam? Necessitatibus commodi quod pariatur error nemo veritatis
            exercitationem tenetur tempore aut.
          </IonListHeader>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
