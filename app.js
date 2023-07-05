
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";


  import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyApfBEGqHaJppRUtcvFXJgkc6qu5A6o7_M",
    authDomain: "authentication-392fd.firebaseapp.com",
    projectId: "authentication-392fd",
    storageBucket: "authentication-392fd.appspot.com",
    messagingSenderId: "1096326085608",
    appId: "1:1096326085608:web:38a84899cf89ff5a44c25d",
    measurementId: "G-QSKDS96JT0"
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

//  SignUp Section

  var SignupButton = document.getElementById("signup-btn")

   SignupButton.addEventListener("click",function(){

    var SignupEmail = document.getElementById("signup-Email").value
    var Signuppassword = document.getElementById("signup-Password").value
   

  createUserWithEmailAndPassword(auth, SignupEmail , Signuppassword  )
  .then((signin) => {
   
    const user = signin.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    console.log("error",errorCode)

  });
});
  
// Signin Seaction

var SigninButton = document.getElementById("signin-btn")
signInWithEmailAndPassword(auth, email, password)

SigninButton.addEventListener("click",function(){
var SigninEmail = document.getElementById("signin-Email").value
    var Signinpassword = document.getElementById("signin-Password").value

  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
})