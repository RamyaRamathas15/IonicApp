import { IonButton, IonContent, IonDatetime, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import React, {useState} from 'react';

const Tab2: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('2012-12-15T13:47:20.789');
  return (
    <IonPage>
     
      <IonHeader>
        <IonToolbar>
          <IonTitle>Booking event</IonTitle>
        </IonToolbar>

      </IonHeader>
     
      <IonContent>
      <form>
        <IonItem>
        <IonLabel>Name</IonLabel>
        <IonInput type="text"></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>Year</IonLabel>
          <IonDatetime displayFormat="YYYY" placeholder="Select Date" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>Month</IonLabel>
          <IonDatetime displayFormat="MMMM" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>Date</IonLabel>
          <IonDatetime displayFormat="DD" placeholder="Select Date" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel>Time</IonLabel>
          <IonDatetime displayFormat="HH:mm" placeholder="Select Date" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
        </IonItem>
        <IonButton type="submit">Submit</IonButton>
        </form>
    </IonContent>
  
   
    </IonPage>
  );
};

export default Tab2;
