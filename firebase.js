
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  
  const firebaseConfig = {
    apiKey: "AIzaSyAWlKOpfQi3MUhxQLocf2Z5rPs7uT72mi0",
    authDomain: "sir-basit-firebase-practice.firebaseapp.com",
    projectId: "sir-basit-firebase-practice",
    storageBucket: "sir-basit-firebase-practice.appspot.com",
    messagingSenderId: "540771167777",
    appId: "1:540771167777:web:b02d912d1f59c9545ebd60",
    measurementId: "G-K7742SC5QK"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
