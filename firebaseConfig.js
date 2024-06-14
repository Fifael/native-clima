import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDoPWZ7jwK47hddZzrIpX5rKQOWKhVQKwc",
    authDomain: "native-563f0.firebaseapp.com",
    projectId: "native-563f0",
    storageBucket: "native-563f0.appspot.com",
    messagingSenderId: "384800582502",
    appId: "1:384800582502:web:9425f4fa8a454d43b5b6a7",
    measurementId: "G-V80B9PFHDS"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const analytics = getAnalytics(app);
  
  export { auth };