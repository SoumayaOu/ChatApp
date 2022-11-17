// Import the functions you need from the SDKs you need
import app from "firebase/compat/app";
import  "firebase/compat/auth";
import Authentification from './../Screen/Authentification';
//import initfirebase from './index';
import "firebase/compat/database";
import "firebase/compat/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTrsLoaw5cGOG5CNqnl5uEjKHM4MGA3V0",
  authDomain: "chatappissat.firebaseapp.com",
  databaseURL: "https://chatappissat-default-rtdb.firebaseio.com",
  projectId: "chatappissat",
  storageBucket: "chatappissat.appspot.com",
  messagingSenderId: "464260105304",
  appId: "1:464260105304:web:870600b06a862212ae362d",
  measurementId: "G-PZL1EE0SZK"
};

// Initialize Firebase
const initfirebase = app.initializeApp(firebaseConfig);
export default initfirebase;