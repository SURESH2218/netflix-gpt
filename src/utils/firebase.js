// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhSu3Q0dNq6JkDVTL0vDtTuYKn7Ned_oA",
  authDomain: "netflixgpt-aa7e1.firebaseapp.com",
  projectId: "netflixgpt-aa7e1",
  storageBucket: "netflixgpt-aa7e1.appspot.com",
  messagingSenderId: "218192653844",
  appId: "1:218192653844:web:08e501af7e5759a45dc101",
  measurementId: "G-5S6PR4KT82",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
