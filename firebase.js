import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import {FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";



  const firebaseConfig = {
    apiKey: "AIzaSyCxSA9dPXGHXHnVd3cuscxy2Q3Eq60q000",
    authDomain: "login-signup-d9874.firebaseapp.com",
    projectId: "login-signup-d9874",
    storageBucket: "login-signup-d9874.appspot.com",
    messagingSenderId: "505391364994",
    appId: "1:505391364994:web:fae0f9be1409fec4d76d9b",
    measurementId: "G-E0V78HHEE4"
  };

 
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const provider = new FacebookAuthProvider();


  export  {app,auth,db,provider}