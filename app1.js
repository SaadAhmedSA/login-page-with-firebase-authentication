  import { auth,createUserWithEmailAndPassword,sendEmailVerification } from "./firebase.js"




    


 let register =  ()=>{
    let user = document.getElementById("user").value
let email = document.getElementById("email").value
let password = document.getElementById("Password").value

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   
    
Swal.fire("Account created!");
window.location.href='login.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
Swal.fire("error",errorMessage);
  });





}
let btn = document.getElementById("Create")

btn.addEventListener("click",register)
    