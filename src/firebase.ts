// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZVKW7-QD6Giu21IDeObaIjCHYQB6XFV0",
  authDomain: "auth-n-crud.firebaseapp.com",
  projectId: "auth-n-crud",
  storageBucket: "auth-n-crud.appspot.com",
  messagingSenderId: "950865117001",
  appId: "1:950865117001:web:d90f8510d12c8d5c0ca498",
  measurementId: "G-XT4WPJKF26"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)