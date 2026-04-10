<script>
// Carregar Firebase v8 corretamente, sem document.write

// Carrega os scripts do Firebase
const scriptApp = document.createElement("script");
scriptApp.src = "https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js";
document.head.appendChild(scriptApp);

const scriptAuth = document.createElement("script");
scriptAuth.src = "https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js";
document.head.appendChild(scriptAuth);

const scriptFirestore = document.createElement("script");
scriptFirestore.src = "https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js";
document.head.appendChild(scriptFirestore);

// Inicializa o Firebase quando todos os scripts carregarem
scriptFirestore.onload = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyBFaCj_qS16rIHd6iOsoGmx8tbYnVcAcAE",
        authDomain: "grupo-rs-prestadora.firebaseapp.com",
        projectId: "grupo-rs-prestadora",
        storageBucket: "grupo-rs-prestadora.appspot.com",
        messagingSenderId: "1090462727115",
        appId: "1:1090462727115:web:29e59110e0bc687b165ae"
    };

    firebase.initializeApp(firebaseConfig);

    window.auth = firebase.auth();
    window.db = firebase.firestore();
};
</script>
