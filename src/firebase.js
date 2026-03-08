// Import Firebase
import { initializeApp } from "firebase/app";

// Firebase Auth
import { getAuth } from "firebase/auth";

// Firebase Realtime Database
import { getDatabase } from "firebase/database";


// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDnJWNTSX6_Ok1xN_psLm8fkhaJ8B8RynI",
  authDomain: "job-portal-bdcf0.firebaseapp.com",
  databaseURL: "https://job-portal-bdcf0-default-rtdb.firebaseio.com",
  projectId: "job-portal-bdcf0",
  storageBucket: "job-portal-bdcf0.firebasestorage.app",
  messagingSenderId: "326357101915",
  appId: "1:326357101915:web:1d2875bc0bd63a11b47e7e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Services
const auth = getAuth(app);
const db = getDatabase(app);


// Export Services
export { auth, db };