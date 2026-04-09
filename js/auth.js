function login() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const erro = document.getElementById("erro");

    auth.signInWithEmailAndPassword(email, senha)
        .then(() => {
            window.location.href = "../pages/dashboard.html";
        })
        .catch((e) => {
            console.error(e);
            erro.innerText = "E-mail ou senha incorretos";
        });
}

function protegerPagina() {
    auth.onAuthStateChanged((user) => {
        if (!user) {
            window.location.href = "login.html";
        }
    });
}

function logout() {
    auth.signOut().then(() => {
        window.location.href = "login.html";
    });
}
