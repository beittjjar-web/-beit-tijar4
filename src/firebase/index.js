import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDv2-F4_qQF6r1HlQtc_TMW-D3NhzCeufg",
  authDomain: "beit-tijar-llaqar3.firebaseapp.com",
  projectId: "beit-tijar-llaqar3",
  storageBucket: "beit-tijar-llaqar3.appspot.com",
  messagingSenderId: "176400798254",
  appId: "1:176400798254:web:2ef1346284a7a08ad0c5bf",
  measurementId: "G-1E2S9FZDH4"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
