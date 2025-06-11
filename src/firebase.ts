import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCFXIMqfZXZw-myVlD949aYSX4V2eTp-4E",
  authDomain: "android-780-debug.firebaseapp.com",
  projectId: "android-780-debug",
  storageBucket: "android-780-debug.appspot.com",
  messagingSenderId: "915041173471",
  appId: "1:915041173471:web:43de9661395fcedff48e6a",
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export { messaging, getToken, onMessage };
