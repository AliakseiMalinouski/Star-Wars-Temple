
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDtzmohvXt9WkyZ5hjgMbqUJvlIbWz86cs",
  authDomain: "star-wars-wiki-8d3b1.firebaseapp.com",
  projectId: "star-wars-wiki-8d3b1",
  storageBucket: "star-wars-wiki-8d3b1.appspot.com",
  messagingSenderId: "1097912345225",
  appId: "1:1097912345225:web:dfc6b1e33d18c2f5629c58",
  measurementId: "G-1EFSWBFSSF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
