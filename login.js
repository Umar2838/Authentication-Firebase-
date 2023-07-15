import {app , auth,provider }  from "./firebase.js"

import { getAuth, signInWithEmailAndPassword,FacebookAuthProvider,signInWithPopup} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";



var facebook = document.getElementById("facebook")

console.log(facebook)

facebook.addEventListener("click",()=>{

  provider.addScope('user_birthday');
provider.setCustomParameters({
  'display': 'popup'
});
  signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
console.log("user:",user)
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;


    
  })
  .catch((error) => {
   
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
  
    const credential = FacebookAuthProvider.credentialFromError(error);
console.log("error",errorMessage)
    // ...
  });


})

var loginButton = document.getElementById("login-btn");

var LoginEmail = document.getElementById("signin-Email")
var LoginPassword = document.getElementById("signin-Password")







loginButton.addEventListener("click", () => {
  signInWithEmailAndPassword(auth, LoginEmail.value, LoginPassword.value)



    .then((login) => {

      const user = login.user;
      console.log("login", user)

      setTimeout(
        window.location.assign("./profile.html"),5000
        )
   
    
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error", errorMessage)

      if (errorMessage === "Firebase: Error (auth/invalid-email).") {

        Swal.fire({
          icon: 'error',
          title: ' Invalid Email ',
          text: ' Please Enter Valid Email ',
        })

      }
      else if (errorMessage === "Firebase: Error (auth/missing-password).") {
        Swal.fire({
          icon: 'error',
          title: ' Password Missing',
          text: ' Please Enter Password ',
        })
      }
      else if (errorMessage === "Firebase: Error (auth/wrong-password).") {
        Swal.fire({
          icon: 'error',
          title: 'Wrong Password',
          text: ' Please Enter Correct Password ',
        })
      }
      else if (errorMessage === "Firebase: Error (auth/user-not-found).") {
        Swal.fire({
          icon: 'error',
          title: 'User Not Found',
          text: ' Create Your Account First',
        })
      }
    });
})





