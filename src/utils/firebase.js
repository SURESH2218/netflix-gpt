// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqpXybZFfFs_d3pls70OGOn0RkvYEkEJE",
  authDomain: "netflix-gpt-e80ec.firebaseapp.com",
  projectId: "netflix-gpt-e80ec",
  storageBucket: "netflix-gpt-e80ec.appspot.com",
  messagingSenderId: "723741438483",
  appId: "1:723741438483:web:81adc9af60d08d66de45e6",
  measurementId: "G-5S6PMQG1ZQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// console.log(analytics);
export const auth = getAuth();
