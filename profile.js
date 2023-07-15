import {app , auth,db }  from "./firebase.js"

import { getAuth, onAuthStateChanged,sendEmailVerification ,signOut } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { doc, getDocFromCache } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";



onAuthStateChanged(auth, (user) => {
  var profile = document.getElementById("profile")
  if (user) {
    
    const uid = user.uid;
   
    


profile.innerHTML = (

  `
  <h1>User Profile</h1>
  <a href="./index.html"><img class="signup-close" src="images/cancel.png"></a>

  <p>User Email:</p>
  <h3>${user.email}</h3>
  <p>Email Veification:</p>
  <h3> ${user.emailVerified}</h3>
 `

)

  } else {
   
  }
});

var verifybtn = document.getElementById("verification") 


verifybtn.addEventListener("click" ,() => {

  sendEmailVerification(auth.currentUser)
    .then(() => {
     
      Swal.fire(
        'Email Sent',
        'Verification Email Sent Successfully',
        'success'
      )

     
    });

})


var Signout = document.getElementById("signout")


Signout.addEventListener("click",()=>{
  signOut(auth).then(() => {
    
    window.location.assign("../index.html")
 
  
  }).catch((error) => {
    Swal.fire({
      icon: 'error',
      title: ' Unexpeccted Error',
      text: 'Signout Error',
    })
  });

})