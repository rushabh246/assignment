
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvhtbsYq732KKnrLSAxwgktQp_HWikUQE",
  authDomain: "ecommere-89875.firebaseapp.com",
  projectId: "ecommere-89875",
  storageBucket: "ecommere-89875.appspot.com",
  messagingSenderId: "193689854037",
  appId: "1:193689854037:web:c397eb35c40284ad47b4dc",
  measurementId: "G-E283TDWXWZ"
};

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app)
console.log("fireDB:", fireDB)

export default fireDB;