// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  import firebase from "firebase";
  const firebaseApp=firebase.initializeApp({
    
        apiKey: "AIzaSyAN7z1NL9vMV-Sg52g4bjXJJ1uBZke-Avg",
        authDomain: "todoapp-60d67.firebaseapp.com",
        projectId: "todoapp-60d67",
        storageBucket: "todoapp-60d67.appspot.com",
        messagingSenderId: "1040129468223",
        appId: "1:1040129468223:web:68ecfa4566e76f9729958a",
        measurementId: "G-4ZMV81EDQM"
      
  });
const db=firebaseApp.firestore();
export  default db;