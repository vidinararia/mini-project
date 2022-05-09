import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDO8n_bKiTdJcKmkFvHrptC6QFDn132YpE",
  authDomain: "mini-project-6dfc3.firebaseapp.com",
  projectId: "mini-project-6dfc3",
  storageBucket: "mini-project-6dfc3.appspot.com",
  messagingSenderId: "807574319551",
  appId: "1:807574319551:web:cb343844de6481b19a310a",
  measurementId: "G-BSDEMFEPR5",
};

const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);

export default storage;
