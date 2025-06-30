// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSsKso0MvdLerv_pihTBgB5PftVQF_YSE",
  authDomain: "blinkbuddy-8c8e1.firebaseapp.com",
  projectId: "blinkbuddy-8c8e1",
  storageBucket: "blinkbuddy-8c8e1.firebasestorage.app",
  messagingSenderId: "247098741859",
  appId: "1:247098741859:web:696703b13e516cc14c9456",
  measurementId: "G-C716CYDPTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);