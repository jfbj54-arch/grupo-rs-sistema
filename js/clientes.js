function salvarCliente() {
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const endereco = document.getElementById("endereco").value;
    const documento = document.getElementById("documento").value;

    if (!nome || !telefone) {
        alert("Preencha pelo menos nome e telefone");
        return;
    }

    db.collection("clientes").add({
        nome,
        telefone,
        endereco,
        documento,
        criadoEm: new Date()
    }).then(() => {
        alert("Cliente cadastrado!");
        carregarClientes();
    });
}

function carregarClientes() {
    const tabela = document.getElementById("listaClientes");
    tabela.innerHTML = "";

    db.collection("clientes").orderBy("nome").get().then((snapshot) => {
        snapshot.forEach((doc) => {
            const cliente = doc.data();

            tabela.innerHTML += `
                <tr>
                    <td>${cliente.nome}</td>
                    <td>${cliente.telefone}</td>
                    <td>${cliente.documento || "-"}</td>
                    <td>
                        <button onclick="excluirCliente('${doc.id}')">Excluir</button>
                    </td>
                </tr>
            `;
        });
    });
}

function excluirCliente(id) {
    if (confirm("Deseja excluir este cliente?")) {
        db.collection("clientes").doc(id).delete().then(() => {
            carregarClientes();
        });
    }
}
