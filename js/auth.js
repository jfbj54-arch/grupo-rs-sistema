ffunction login() {
    // Garante que o Firebase carregou
    if (!window.auth) {
        alert("Carregando... tente novamente em 1 segundo.");
        return;
    }

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    window.auth.signInWithEmailAndPassword(email, senha)
        .then(() => {
            window.location.href = "../pages/dashboard.html";
        })
        .catch((error) => {
            console.error(error);
            alert("E-mail ou senha incorretos.");
        });
}
