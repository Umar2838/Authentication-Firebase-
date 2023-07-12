import {app , auth }  from "./firebase.js"

import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";




var loginButton = document.getElementById("login-btn");

var LoginEmail = document.getElementById("signin-Email")
var LoginPassword = document.getElementById("signin-Password")




loginButton.addEventListener("click", () => {
  signInWithEmailAndPassword(auth, LoginEmail.value, LoginPassword.value)



    .then((login) => {

      const user = login.user;
      console.log("login", user)

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'You have Logged In Successfully',
        showConfirmButton: false,
        timer: 1500

      })
      window.location.assign("./profile.html")
     
      localStorage.setItem("userid",user.uid)
      console.log(user.uid)
      
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





