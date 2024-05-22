// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKO9m6PnE4pULBDZgujLU-Ck4Jy_ZhPDY",
  authDomain: "fir-test-efc2f.firebaseapp.com",
  projectId: "fir-test-efc2f",
  storageBucket: "fir-test-efc2f.appspot.com",
  messagingSenderId: "484104808861",
  appId: "1:484104808861:web:e78d79354d2f3f9be02774",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getFirestore } from "firebase/firestore";
const db = getFirestore(app);

export default db;
