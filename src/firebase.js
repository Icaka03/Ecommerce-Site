import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeDrg8BRhCS36x15Z5XVYlosbqMVMoTHw",
  authDomain: "ecommerceshop-1e5ae.firebaseapp.com",
  projectId: "ecommerceshop-1e5ae",
  storageBucket: "ecommerceshop-1e5ae.appspot.com",
  messagingSenderId: "836329359712",
  appId: "1:836329359712:web:4b17dcae1507447b17b605",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
