import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCBifvYsolieUmLMA47aF2c_3gzJpxNjjk",
  authDomain: "liones-rpg.firebaseapp.com",
  projectId: "liones-rpg",
  storageBucket: "liones-rpg.appspot.com",
  messagingSenderId: "353712031836",
  appId: "1:353712031836:web:0388d0edfa4ac1e429fe99",
  databaseURL: "https://liones-rpg-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
