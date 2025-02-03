// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b0010.firebaseapp.com",
  projectId: "mern-estate-b0010",
  storageBucket: "mern-estate-b0010.firebasestorage.app",
  messagingSenderId: "370584125430",
  appId: "1:370584125430:web:6fef2f24711070bbf7d1d7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);