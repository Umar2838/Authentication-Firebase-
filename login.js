import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";

import { getAuth,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";


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

var loginButton = document.getElementById("login-btn");

var LoginEmail = document.getElementById("signin-Email")
var LoginPassword = document.getElementById("signin-Password")




loginButton.addEventListener("click", () => {
signInWithEmailAndPassword(auth, LoginEmail.value, LoginPassword.value)

  .then((login) => {
   
    const user = login.user;
   console.log("login",user)

   Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'You have Logged In Successfully',
    showConfirmButton: false,
    timer: 1500
  })
  if(LoginEmail === " ".trim() && LoginPassword === " ".trim){
    Swal.fire({
      icon: 'error',
      title: ' Field Required ',
      text: 'please enter username , phone , email or password  ',
    })
  }
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error" ,errorMessage)

    



  });


})