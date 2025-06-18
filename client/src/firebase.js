import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQIqh0ZLMMpVUqCG1TUYWB6zLli3UPtzI",
  authDomain: "stayfinder-10a37.firebaseapp.com",
  projectId: "stayfinder-10a37",
  storageBucket: "stayfinder-10a37.appspot.com",
  messagingSenderId: "893006121672",
  appId: "1:893006121672:web:4ca1197d7652b248fcf3fd"
};

// 🔥 Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Setup Auth and Google Provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
