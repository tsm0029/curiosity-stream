export const environment = {
  production: true
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6ucXvR-dW3qiJ_1MpJfNQBrzjWr_EvjA",
  authDomain: "curiosity-stream-b4f86.firebaseapp.com",
  databaseURL: "https://curiosity-stream-b4f86-default-rtdb.firebaseio.com",
  projectId: "curiosity-stream-b4f86",
  storageBucket: "curiosity-stream-b4f86.appspot.com",
  messagingSenderId: "918098123668",
  appId: "1:918098123668:web:af26ad15c5667ab0744d81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);