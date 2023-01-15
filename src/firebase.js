import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";


//import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKrjmy2QxEYZe2BcD2EZF_BQj7vJzHgKk",
  authDomain: "noteshare-9d2a6.firebaseapp.com",
  projectId: "noteshare-9d2a6",
  storageBucket: "noteshare-9d2a6.appspot.com",
  messagingSenderId: "482277382487",
  appId: "1:482277382487:web:3c1f88e93dd775396e0612",
  measurementId: "G-M9DJGFTELQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);