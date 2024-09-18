// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqmnRZ5aZ1rVHa7UiBVL8ZoFLy3NiPct8",
  authDomain: "amigosecreto-7977a.firebaseapp.com",
  projectId: "amigosecreto-7977a",
  storageBucket: "amigosecreto-7977a.appspot.com",
  messagingSenderId: "1002107673261",
  appId: "1:1002107673261:web:effc750378c2d49a0d8424",
  measurementId: "G-4SE626T7PF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);