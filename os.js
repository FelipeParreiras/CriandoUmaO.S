document.addEventListener("DOMContentLoaded", () => {
    const dados = JSON.parse(localStorage.getItem("dadosFormularios"));

    if (dados) {
        const campos = [
            // Proprietário
            "nome-proprietario", "cpf-proprietario", "endereco-proprietario", 
            "numero-proprietario", "bairro-proprietario", "estado-proprietario",
            "cidade-proprietario", "cep-proprietario", "telefone-proprietario",
            // Veículo
            "chassi-veiculo", "placa-veiculo", "tipo-veiculo", "marca-modelo", 
            "combustivel-veiculo", "ano-fabricacao", "ano-modelo", "cor-veiculo",
        ];

        campos.forEach((campo) => {
            const elemento = document.getElementById(campo);
            if (elemento && dados[campo]) {
                elemento.textContent = dados[campo];
            }
        });

        document.getElementById("data-emissao").textContent = new Date().toLocaleString();
    }
});
