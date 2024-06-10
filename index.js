import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyA8hOna0Ujj1B3eYl73tYf4ZcAaXptnfk8",
  authDomain: "bidapp-3b9c6.firebaseapp.com",
  projectId: "bidapp-3b9c6",
  storageBucket: "bidapp-3b9c6.appspot.com",
  messagingSenderId: "130051847249",
  appId: "1:130051847249:web:62d1bd204434b4329e3470",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//   ---------------- Inputs -------------------------------

const submit = document.getElementById("submit");

submit.addEventListener("click", function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Logged Successfully");
      window.location.href = "dashboard.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});
