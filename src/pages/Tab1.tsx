import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import test from './test.png';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonCard>
     
        
     <IonCardHeader>
     
       <IonCardSubtitle>Event</IonCardSubtitle>
       {/* <IonCardTitle>Card Title</IonCardTitle> */}

     </IonCardHeader>
     <IonItem href="#" className="ion-activated">
     <IonImg src={test}/>
     </IonItem>
     <IonCardContent>
      Allows to book event for your loved ones
     </IonCardContent>
    
   </IonCard>

        {/* <IonCard>
          <IonItem>
            <IonIcon slot="start" />
            <IonLabel>ion-item in a card, icon left, button right</IonLabel>
            <IonButton fill="outline" slot="end">View</IonButton>
          </IonItem>

          <IonCardContent>
            This is content, without any paragraph or header tags,
            within an ion-cardContent element.
      </IonCardContent>
        </IonCard> */}

      <IonCard>
     
        
        <IonCardHeader>
        
          <IonCardSubtitle>Event</IonCardSubtitle>
          {/* <IonCardTitle>Card Title</IonCardTitle> */}

        </IonCardHeader>
        <IonItem href="#" className="ion-activated">
        <IonImg src={test}/>
        </IonItem>
        <IonCardContent>
         Allows to book event for your loved ones
        </IonCardContent>
       
      </IonCard>

        <IonCard>
          <IonItem href="#" className="ion-activated">
            <IonIcon icon={wifi} slot="start" />
            <IonLabel>Card Link Item 1 activated</IonLabel>
          </IonItem>
          </IonCard>
          <IonCard>

          <IonItem href="#">
            <IonIcon icon={wine} slot="start" />
            <IonLabel>Card Link Item 2</IonLabel>
          </IonItem>
          </IonCard>
          <IonCard>
          <IonItem className="ion-activated">
            <IonIcon icon={warning} slot="start" />
            <IonLabel>Card Button Item 1 activated</IonLabel>
          </IonItem>
          </IonCard>
          <IonCard>
          <IonItem>
            <IonIcon icon={walk} slot="start" />
            <IonLabel>Card Button Item 2</IonLabel>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
