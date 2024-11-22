// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "carsales-4d3db.firebaseapp.com",
  projectId: "carsales-4d3db",
  storageBucket: "carsales-4d3db.firebasestorage.app",
  messagingSenderId: "431072481885",
  appId: "1:431072481885:web:44cfe3f836881e9a6ff3b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);