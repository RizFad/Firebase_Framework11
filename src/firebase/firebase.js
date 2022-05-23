import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCh9vGeUC-K7lGT7SDVoH_oZYI6uJXB70o",
  authDomain: "praktikum11-7deb3.firebaseapp.com",
  projectId: "praktikum11-7deb3",
  storageBucket: "praktikum11-7deb3.appspot.com",
  messagingSenderId: "691468240970",
  appId: "1:691468240970:web:0909420a25851f908c7eb3",
  measurementId: "G-339DPRZW5T"

};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;