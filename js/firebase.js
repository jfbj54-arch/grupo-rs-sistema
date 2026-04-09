// Firebase v8 (compat) - funciona com firebase.auth() e firebase.firestore()

document.write(`
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>
`);

const firebaseConfig = {
  apiKey: "AIzaSyBFaCj_q5I6r1Hd6iOSoGmx8tbYnVaCAcE",
  authDomain: "grupo-rs-prestadora.firebaseapp.com",
  projectId: "grupo-rs-prestadora",
  storageBucket: "grupo-rs-prestadora.appspot.com",
  messagingSenderId: "1090467227115",
  appId: "1:1090467227115:web:29e591100fbe0c87b165ae"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
