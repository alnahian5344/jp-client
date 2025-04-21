// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi5mCibD89QPHQXYpuuBvV-9OsRQH8aUY",
  authDomain: "job-portal-4d91e.firebaseapp.com",
  projectId: "job-portal-4d91e",
  storageBucket: "job-portal-4d91e.firebasestorage.app",
  messagingSenderId: "691053149350",
  appId: "1:691053149350:web:33c9fe10bc367868c00867"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  export default auth;