import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyDxXeCjYNWA9JQvu449XxFLQTLEMRr8EYk",
    authDomain: "ecom-8c8da.firebaseapp.com",
    projectId: "ecom-8c8da",
    storageBucket: "ecom-8c8da.appspot.com",
    messagingSenderId: "43421852160",
    appId: "1:43421852160:web:7fbb14b43fd8022cf52ee5"
  };

  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  // export 
  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  export default app;