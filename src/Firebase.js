import firebase from "firebase/app";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-j7siZ61w1GY5bXoIRNeTLWhgU5L16Bw",
  authDomain: "loric-movies.firebaseapp.com",
  projectId: "loric-movies",
  storageBucket: "loric-movies.appspot.com",
  messagingSenderId: "951554188495",
  appId: "1:951554188495:web:e6c9407e4f630411dfc3ba",
  measurementId: "G-NX3D8RV9TY",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
