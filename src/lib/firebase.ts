// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1AV4w9fkT0Gz57HWckZ0UHCbL5VtvwnU",
  authDomain: "ecommerce-5f609.firebaseapp.com",
  projectId: "ecommerce-5f609",
  storageBucket: "ecommerce-5f609.appspot.com",
  messagingSenderId: "412420941448",
  appId: "1:412420941448:web:ee32fc01ce2ef91c26213d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();