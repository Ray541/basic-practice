import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDOusYzC-DiSJeWG1iXJDFe2qW6OmWozk",
  authDomain: "userdetails-6016a.firebaseapp.com",
  projectId: "userdetails-6016a",
  storageBucket: "userdetails-6016a.appspot.com",
  messagingSenderId: "453096135201",
  appId: "1:453096135201:web:5f9ee3876662e6f0ea6160"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storeText = getFirestore(app);
const storeImage = getStorage(app);

export {storeText, storeImage};