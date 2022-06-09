// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX8EQCo1JgErU_tskFRe9NGVXvdPJaAjs",
  authDomain: "personal-portfolio-4688f.firebaseapp.com",
  projectId: "personal-portfolio-4688f",
  storageBucket: "personal-portfolio-4688f.appspot.com",
  messagingSenderId: "567482559545",
  appId: "1:567482559545:web:187356ee3612010812b1e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;