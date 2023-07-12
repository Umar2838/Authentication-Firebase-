import {app , auth }  from "./firebase.js"

import { getAuth, onAuthStateChanged,sendEmailVerification ,updateProfile } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";



onAuthStateChanged(auth, (user) => {
  var profile = document.getElementById("profile")
  if (user) {
    
    const uid = user.uid;
    console.log(user)

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


var profile = document.getElementById("update")


profile.addEventListener("click",()=>{
updateProfile(auth.currentUser, {
  // displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  Swal.fire(
    'Update',
    'Your Profile is Up-to-Date',
    'success'
  )
}).catch((error) => {
  Swal.fire({
    icon: 'error',
    title: ' Error ',
    text: ' Unexpected Error ',
  })
});

})