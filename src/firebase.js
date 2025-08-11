// src/firebase.js
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDv2-F4_qQF6r1HlQtc_TMW-D3NhzCeufg",
  authDomain: "beit-tijar-llaqar3.firebaseapp.com",
  projectId: "beit-tijar-llaqar3",
  storageBucket: "beit-tijar-llaqar3.appspot.com",
  messagingSenderId: "176400798254",
  appId: "1:176400798254:web:2ef1346284a7a08ad0c5bf",
  measurementId: "G-1E2S9FZDH4"
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export default firebaseApp;
