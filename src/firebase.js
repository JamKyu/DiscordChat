import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmPS4IUpD6o9FFMJpsAX-sU7MK8Yww9GM",
  authDomain: "discord-clone-3fa26.firebaseapp.com",
  projectId: "discord-clone-3fa26",
  storageBucket: "discord-clone-3fa26.appspot.com",
  messagingSenderId: "402360095318",
  appId: "1:402360095318:web:85227b9098f3718894a1f7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
