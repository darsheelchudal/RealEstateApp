// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-fef4e.firebaseapp.com",
  projectId: "realestate-fef4e",
  storageBucket: "realestate-fef4e.appspot.com",
  messagingSenderId: "197421633831",
  appId: "1:197421633831:web:c20ba7ac4485dbc17e9902",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
