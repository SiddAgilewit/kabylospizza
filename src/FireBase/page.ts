
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { fetchAndActivate, getRemoteConfig } from 'firebase/remote-config';


const firebaseConfig = {
    apiKey: "AIzaSyClsCUXBQ5qh-9n79jN6K8oYfPXlGpgWEE",
    authDomain: "kabylospizza-b2bee.firebaseapp.com",
    projectId: "kabylospizza-b2bee",
    storageBucket: "kabylospizza-b2bee.firebasestorage.app",
    messagingSenderId: "603711999457",
    appId: "1:603711999457:web:f30da9f97f5aec1e9c96a0",
    measurementId: "G-T9VTP12EFE"
  };
  


const app=initializeApp(firebaseConfig)



const db =getFirestore(app);
export const remoteConfig = getRemoteConfig(app);

remoteConfig.settings.minimumFetchIntervalMillis = 3600000; // Fetch new values every 1 hour

// Fetch and activate remote config values
const activateRemoteConfig = async () => {
  try {
    await fetchAndActivate(remoteConfig);
  } catch (error) {
    console.error("Error fetching remote config:", error);
  }
};

export {activateRemoteConfig,db}
