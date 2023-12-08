import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKvlkeVLJuCMiMMwSka48XJBQ4qezRnq8",
  authDomain: "fir-project-c3e4b.firebaseapp.com",
  projectId: "fir-project-c3e4b",
  storageBucket: "fir-project-c3e4b.appspot.com",
  messagingSenderId: "326155557994",
  appId: "1:326155557994:web:e64f35a408b8bf5ef1be13",
  measurementId: "G-1V18BX2731",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
