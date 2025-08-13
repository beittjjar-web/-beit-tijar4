// Firebase configuration
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDv2-F4_qQF6r1HlQtc_TMW-D3NhzCeufg",
  authDomain: "beit-tijar-llaqar3.firebaseapp.com",
  projectId: "beit-tijar-llaqar3",
  storageBucket: "beit-tijar-llaqar3.appspot.com",
  messagingSenderId: "176400798254",
  appId: "1:176400798254:web:2ef1346284a7a08ad0c5bf",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
