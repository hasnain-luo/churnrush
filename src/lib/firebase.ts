// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiEZA7jSHvLe2dllDHSzkIbHCwZHWZsdM",
  authDomain: "churnrush-tool-2.firebaseapp.com",
  projectId: "churnrush-tool-2",
  storageBucket: "churnrush-tool-2.appspot.com",
  messagingSenderId: "508605819153",
  appId: "1:508605819153:web:d5e9f1b246204a3f0e04b0"
};

// Initialize Firebase for client-side usage
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export { app };
