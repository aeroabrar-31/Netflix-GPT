// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALzI395pCu6PfU0NOAO95epujh-7HMqks",
  authDomain: "netflixgpt-75f14.firebaseapp.com",
  projectId: "netflixgpt-75f14",
  storageBucket: "netflixgpt-75f14.appspot.com",
  messagingSenderId: "322379624547",
  appId: "1:322379624547:web:76662632e5924422008856",
  measurementId: "G-41QC3L7TBJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
