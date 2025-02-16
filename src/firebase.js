// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5pjVul6rbiDymkTmODI_jVoie2cyqC2Q",
  authDomain: "cinehub-project-4f8f1.firebaseapp.com",
  projectId: "cinehub-project-4f8f1",
  storageBucket: "cinehub-project-4f8f1.firebasestorage.app",
  messagingSenderId: "721396612161",
  appId: "1:721396612161:web:45dbc4079ca4bd2a339ac0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
