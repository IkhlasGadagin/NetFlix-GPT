// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDG-C9BMrCJMFlYT0FOgBA_a8kubiq5JQ",
  authDomain: "ikhlas-netflixgpt.firebaseapp.com",
  projectId: "ikhlas-netflixgpt",
  storageBucket: "ikhlas-netflixgpt.appspot.com",
  messagingSenderId: "271058541049",
  appId: "1:271058541049:web:225149cdb258c7e0768528",
  measurementId: "G-ZQG7PRKPJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth= getAuth();