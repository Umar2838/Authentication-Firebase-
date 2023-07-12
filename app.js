  import {app,auth,db} from "./firebase.js"

  import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

  import { getFirestore,collection, addDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

  // const auth = getAuth(app);
  // const db = getFirestore(app);


//  SignUp Section //

  var SignupButton = document.getElementById("signup-btn");

  SignupButton.addEventListener("click", () => {
  var SignupEmail = document.getElementById("signup-Email")
  var Signuppassword = document.getElementById("signup-Password")
  var SignupPhone = document.getElementById("signup-phone")
  var SignupuserName = document.getElementById("username")

   let userData = {
    name: SignupuserName.value,
    phone: SignupPhone.value,
    email: SignupEmail.value,
    password: Signuppassword.value
  };



  createUserWithEmailAndPassword(auth, userData.email , userData.password  )
  .then( async (signup) => {
    
    const user = signup.user;
    
    try {
      const docRef = await addDoc(collection(db, "users"), {
       ...userData,
       id:user.uid
      });
      console.log("Document written with ID: ", docRef.id)
      
      if( "Document written with ID: ", docRef.id ){
       
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'You have Registered Successfully',
          showConfirmButton: false,
          timer: 1500
        })

      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }


  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error",errorMessage)
    if( userData.name === " ".trim() && userData.phone === " ".trim() && userData.email === " ".trim() && userData.password === " ".trim() ){

      Swal.fire({
        icon: 'error',
        title: ' Field Required ',
        text: 'please enter username , phone , email or password  ',
      })

    }
  else if(errorMessage === "Firebase: Error (auth/invalid-email)."){

    Swal.fire({
      icon: 'error',
      title: 'Invalid Email ',
      text: 'please enter email in right format ',
    })

  }
  else if(errorMessage === "Firebase: Error (auth/missing-password)."){

    Swal.fire({
      icon: 'error',
      title: 'Invalid Password ',
      text: 'please enter correct Password  ',
    })

  }
   else if(errorMessage === "Firebase: Password should be at least 6 characters (auth/weak-password)."){

    Swal.fire({
      icon: 'error',
      title: 'Invalid Password ',
      text: 'Password should be at least 6 characters  ',
    })

  }
  else if(errorMessage === "Firebase: Error (auth/email-already-in-use)."){

    Swal.fire({
      icon: 'error',
      title: ' Invalid Email ',
      text: ' Email is already in use ',
    })

  }
 
  
  });
  });
 

















  
