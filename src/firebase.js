// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO8n_bKiTdJcKmkFvHrptC6QFDn132YpE",
  authDomain: "mini-project-6dfc3.firebaseapp.com",
  projectId: "mini-project-6dfc3",
  storageBucket: "mini-project-6dfc3.appspot.com",
  messagingSenderId: "807574319551",
  appId: "1:807574319551:web:cb343844de6481b19a310a",
  measurementId: "G-BSDEMFEPR5",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);

export default storage;
