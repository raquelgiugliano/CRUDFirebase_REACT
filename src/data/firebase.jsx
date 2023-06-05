import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJsKQBSnt6aIWPIXA2XgHMbGq8GNCpm3I",
  authDomain: "fir-crud-28362.firebaseapp.com",
  projectId: "fir-crud-28362",
  storageBucket: "fir-crud-28362.appspot.com",
  messagingSenderId: "988485401017",
  appId: "1:988485401017:web:a8df9544fb368562731e68",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
