
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyChY-9GFqDDFo7hyGqLV8TMeYzETIKEfi0",
  authDomain: "sakrean-8b632.firebaseapp.com",
  projectId: "sakrean-8b632",
  storageBucket: "sakrean-8b632.appspot.com",
  messagingSenderId: "295106659726",
  appId: "1:295106659726:web:61106d19329069f13050df"
};

initializeApp(firebaseConfig);
export const db = getFirestore();