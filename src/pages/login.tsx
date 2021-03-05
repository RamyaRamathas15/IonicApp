import { IonButton, IonContent, IonDatetime, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, {useState} from 'react';

const login: React.FC = () => {
  return (
    <IonPage>
     
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
          <form>
          <IonItem>
              <IonLabel>Username</IonLabel>
              <IonInput type="text"></IonInput>
          </IonItem>
          <IonItem>
              <IonLabel>Password</IonLabel>
              <IonInput type="password"></IonInput>
          </IonItem>
          <IonButton type="submit">Login</IonButton>
          </form>
        </IonToolbar>

      </IonHeader>
    
  
   
    </IonPage>
  );
};

export default login;
