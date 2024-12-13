// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyABv1VSmNYDdbOJ9FhImgCT5iq5Qu0buYU",
  authDomain: "myfirstapp-211f8.firebaseapp.com",
  projectId: "myfirstapp-211f8",
  storageBucket: "myfirstapp-211f8.firebasestorage.app",
  messagingSenderId: "641473343761",
  appId: "1:641473343761:web:a92401a8d8eeede25b5cb0"
};

const app = initializeApp(firebaseConfig);
const fireDB= getFirestore(app)
const auth = getAuth(app)
export {fireDB, auth}