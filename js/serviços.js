function salvarServico() {
    const nome = document.getElementById("nome").value;
    const valor = document.getElementById("valor").value;
    const descricao = document.getElementById("descricao").value;

    if (!nome || !valor) {
        alert("Preencha nome e valor");
        return;
    }

    db.collection("servicos").add({
        nome,
        valor: Number(valor),
        descricao,
        criadoEm: new Date()
    }).then(() => {
        alert("Serviço cadastrado!");
        carregarServicos();
    });
}

function carregarServicos() {
    const tabela = document.getElementById("listaServicos");
    tabela.innerHTML = "";

    db.collection("servicos").orderBy("nome").get().then((snapshot) => {
        snapshot.forEach((doc) => {
            const servico = doc.data();

            tabela.innerHTML += `
                <tr>
                    <td>${servico.nome}</td>
                    <td>R$ ${servico.valor.toFixed(2)}</td>
                    <td>
                        <button onclick="excluirServico('${doc.id}')">Excluir</button>
                    </td>
                </tr>
            `;
        });
    });
}

function excluirServico(id) {
    if (confirm("Deseja excluir este serviço?")) {
        db.collection("servicos").doc(id).delete().then(() => {
            carregarServicos();
        });
    }
}
