// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKgIkF4LSFNE4FHgdB4DeP2dPi8BTcLpE",
  authDomain: "masdrivefrontend.firebaseapp.com",
  projectId: "masdrivefrontend",
  storageBucket: "masdrivefrontend.firebasestorage.app",
  messagingSenderId: "252737770505",
  appId: "1:252737770505:web:233a89da214c31e50214d8",
  measurementId: "G-HENM6C3LMD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);