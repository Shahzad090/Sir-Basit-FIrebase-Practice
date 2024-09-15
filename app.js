

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getAuth,
  onAuthStateChanged,
 } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";



const firebaseConfig = {
  apiKey: "AIzaSyCfqNBhhWtn1wmzvPmGoXE5-hxviZtKlcA",
  authDomain: "sir-basit-firebase-pract-3b71c.firebaseapp.com",
  projectId: "sir-basit-firebase-pract-3b71c",
  storageBucket: "sir-basit-firebase-pract-3b71c.appspot.com",
  messagingSenderId: "525801764690",
  appId: "1:525801764690:web:57fba62db30374af55ac8b",
  measurementId: "G-YD85XC7BFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// console.log(app);

const auth = getAuth(app);

// console.log(auth);

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});