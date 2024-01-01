// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ0QtkaRXJJsZZcZAhuK9a24CHvoz47mA",
  authDomain: "netflixgpt-8f793.firebaseapp.com",
  projectId: "netflixgpt-8f793",
  storageBucket: "netflixgpt-8f793.appspot.com",
  messagingSenderId: "1078151089220",
  appId: "1:1078151089220:web:2cc704677d6cdcc0850011",
  measurementId: "G-PTN92JFXS2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();