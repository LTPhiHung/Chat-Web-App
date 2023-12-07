// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDJILjymtm8l7RtW8w5Nsig_mjnQVAnYnk",
  authDomain: "chat-web-app-69be3.firebaseapp.com",
  projectId: "chat-web-app-69be3",
  storageBucket: "chat-web-app-69be3.appspot.com",
  messagingSenderId: "335061161799",
  appId: "1:335061161799:web:5b5aa0f6bd4cfe2d479e62",
  measurementId: "G-DPCWSTQRKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new FacebookAuthProvider();

const database = getDatabase(app);

export { auth, provider, database }
// export default app;