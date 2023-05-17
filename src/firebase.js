
import { initializeApp } from "firebase/app";
import {getFirestore}  from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAaIw3iDwCRK-KDupZaN-CXyVi-jT_I_l4",
  authDomain: "personal-portfolio-parshant.firebaseapp.com",
  projectId: "personal-portfolio-parshant",
  storageBucket: "personal-portfolio-parshant.appspot.com",
  messagingSenderId: "743629338027",
  appId: "1:743629338027:web:f7db884bab9d873b308eee"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore();