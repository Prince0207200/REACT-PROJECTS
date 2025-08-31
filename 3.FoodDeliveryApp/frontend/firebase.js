// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fooddeliveryapp-8d00e.firebaseapp.com",
  projectId: "fooddeliveryapp-8d00e",
  storageBucket: "fooddeliveryapp-8d00e.firebasestorage.app",
  messagingSenderId: "1065937806783",
  appId: "1:1065937806783:web:663ce294addd730232ed0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export {app,auth}