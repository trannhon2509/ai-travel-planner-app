// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHNdM7OWaBPO2P0hkxrIsKKHba45M9eRo",
  authDomain: "ai-travel-planner-dfa4c.firebaseapp.com",
  projectId: "ai-travel-planner-dfa4c",
  storageBucket: "ai-travel-planner-dfa4c.appspot.com",
  messagingSenderId: "197009292221",
  appId: "1:197009292221:web:f99ff3803401131916f0d4",
  measurementId: "G-HF799HBFN7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth
// const analytics = getAnalytics(app);