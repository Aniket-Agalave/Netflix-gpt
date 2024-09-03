// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDp6wriV6sO6vP6Gtb4vnpgXs21LnhCsc",
  authDomain: "netflixgpt-4dbc8.firebaseapp.com",
  projectId: "netflixgpt-4dbc8",
  storageBucket: "netflixgpt-4dbc8.appspot.com",
  messagingSenderId: "694812373813",
  appId: "1:694812373813:web:c222adfe6a627df20c127c",
  measurementId: "G-KXZNJXCP0F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
