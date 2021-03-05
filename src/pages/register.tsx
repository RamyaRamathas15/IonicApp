import { IonButton, IonContent, IonDatetime, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, {useState} from 'react';

const register: React.FC = () => {
  return (
    <IonPage>
     
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
          <form>
          <IonItem>
              <IonLabel>First name</IonLabel>
              <IonInput type="text"></IonInput>
          </IonItem>
          <IonItem>
              <IonLabel>Last Name</IonLabel>
              <IonInput type="text"></IonInput>
          </IonItem>
          <IonItem>
              <IonLabel>Address line1</IonLabel>
              <IonInput type="text"></IonInput>
          </IonItem>
          <IonItem>
              <IonLabel>Address line2</IonLabel>
              <IonInput type="text"></IonInput>
          </IonItem>
          <IonItem>
              <IonLabel>Zip code</IonLabel>
              <IonInput type="text"></IonInput>
          </IonItem>
          <IonButton type="submit">Register</IonButton>
          </form>
        </IonToolbar>

      </IonHeader>
    
  
   
    </IonPage>
  );
};

export default register;
