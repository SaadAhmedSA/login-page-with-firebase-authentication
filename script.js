import { auth,signOut,onAuthStateChanged,sendEmailVerification } from "./firebase.js"

// const auth = getAuth();

const log=()=>{signOut(auth).then(() => {
 window.location.href="login.html"
}).catch((error) => {
  alert(error)
});}

let btn= document.getElementById("logout")
btn.addEventListener("click",log)

onAuthStateChanged(auth, (user) => {
  if (user) {
   
    if(location.pathname!=="/index.html"){

      window.location ='index.html'
    }
  } else {
    if(location.pathname!=="/login.html" &&location.pathname!=="/create.html"){ 

      window.location ='login.html'
    }

  }
});