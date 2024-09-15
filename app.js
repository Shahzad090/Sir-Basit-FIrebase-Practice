// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCfqNBhhWtn1wmzvPmGoXE5-hxviZtKlcA",
  authDomain: "sir-basit-firebase-pract-3b71c.firebaseapp.com",
  projectId: "sir-basit-firebase-pract-3b71c",
  storageBucket: "sir-basit-firebase-pract-3b71c.appspot.com",
  messagingSenderId: "525801764690",
  appId: "1:525801764690:web:57fba62db30374af55ac8b",
  measurementId: "G-YD85XC7BFZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const First_name = document.getElementById('First_name')
const Last_name = document.getElementById('Last_name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const Signup_Btn = document.getElementById('Signup_Btn')

Signup_Btn.addEventListener("click" , creatUserAccount);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is logged in===>");
    const uid = user.uid;
  } else {
    console.log("User is not logged in===>");
  }
});


function creatUserAccount() {
  // console.log("First_name", First_name.value);
  // console.log("Last_name", Last_name.value);
  // console.log("email", email.value);
  // console.log("password", password.value);
  createUserWithEmailAndPassword(
    auth,
     First_name.value, 
      Last_name.value,
        email.value,
         password.value)

  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("errormessage");
  });
}