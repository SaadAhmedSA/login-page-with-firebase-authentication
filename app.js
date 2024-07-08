import { auth, signInWithEmailAndPassword,} from "./firebase.js"


let btn1 = document.getElementById("login")

btn1 && btn1.addEventListener("click",
    
function login(){
let email = document.getElementById("email").value
let password = document.getElementById("Password").value
signInWithEmailAndPassword(auth, email, password)
 .then((userCredential) => {
  
   
Swal.fire("login successfully!");
window.location.href="index.html"


 })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   
Swal.fire("error",errorMessage);
 });

});


