// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5956d.firebaseapp.com",
  projectId: "mern-estate-5956d",
  storageBucket: "mern-estate-5956d.appspot.com",
  messagingSenderId: "108749609778",
  appId: "1:108749609778:web:d836ecaaafce13e11b952b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);