document.addEventListener("DOMContentLoaded", () => {
    const dados = JSON.parse(localStorage.getItem("dadosFormularios"));

    if (dados) {
        // Dados do Proprietário
        document.getElementById("nome-proprietario").textContent = dados["form-proprietario"]["nome-proprietario"];
        document.getElementById("cpf-proprietario").textContent = dados["form-proprietario"]["cpf-proprietario"];
        document.getElementById("endereco-proprietario").textContent = dados["form-proprietario"]["endereco-proprietario"];
        document.getElementById("numero-proprietario").textContent = dados["form-proprietario"]["numero-proprietario"];
        document.getElementById("bairro-proprietario").textContent = dados["form-proprietario"]["bairro-proprietario"];
        document.getElementById("cidade-proprietario").textContent = dados["form-proprietario"]["cidade-proprietario"];
        document.getElementById("estado-proprietario").textContent = dados["form-proprietario"]["estado-proprietario"];
        document.getElementById("cep-proprietario").textContent = dados["form-proprietario"]["cep-proprietario"];
        document.getElementById("telefone-proprietario").textContent = dados["form-proprietario"]["telefone1-cliente"];
        document.getElementById("cartao-proprietario").textContent = dados["form-proprietario"]["cartao-cliente"];

        // Dados do Veículo
        document.getElementById("placa-veiculo").textContent = dados["form-veiculo"]["placa-veiculo"];
        document.getElementById("chassi-veiculo").textContent = dados["form-veiculo"]["chassi-veiculo"];
        document.getElementById("tipo-veiculo").textContent = dados["form-veiculo"]["tipo-veiculo"];
        document.getElementById("marca-modelo").textContent = dados["form-veiculo"]["marca-modelo"];
        document.getElementById("combustivel-veiculo").textContent = dados["form-veiculo"]["combustivel-veiculo"];
        document.getElementById("ano-fabricacao").textContent = dados["form-veiculo"]["ano-fabricacao"];
        document.getElementById("ano-modelo").textContent = dados["form-veiculo"]["ano-modelo"];
        document.getElementById("capacidade-veiculo").textContent = dados["form-veiculo"]["capacidade-veiculo"];
        document.getElementById("potencia-veiculo").textContent = dados["form-veiculo"]["potencia-veiculo"];
        document.getElementById("categoria-veiculo").textContent = dados["form-veiculo"]["categoria-veiculo"];
        document.getElementById("cor-veiculo").textContent = dados["form-veiculo"]["cor-veiculo"];

        // Cliente
        document.getElementById("nome-cliente").textContent = dados["form-cliente"]["nome-cliente"];
        document.getElementById("cpf-cliente").textContent = dados["form-cliente"]["cpf-cliente"];
        document.getElementById("endereco-cliente").textContent = dados["form-cliente"]["endereco-cliente"];
        document.getElementById("numero-cliente").textContent = dados["form-cliente"]["numero-cliente"];
        document.getElementById("bairro-cliente").textContent = dados["form-cliente"]["bairro-cliente"];
        document.getElementById("cidade-cliente").textContent = dados["form-cliente"]["cidade-cliente"];
        document.getElementById("estado-cliente").textContent = dados["form-cliente"]["estado-cliente"];
        document.getElementById("cep-cliente").textContent = dados["form-cliente"]["cep-cliente"];
        document.getElementById("telefone1-cliente").textContent = dados["form-cliente"]["telefone1-cliente"];
        document.getElementById("cartao-cliente").textContent = dados["form-cliente"]["cartao-cliente"];

        // Data de Emissão
        document.getElementById("data-emissao").textContent = new Date().toLocaleString();
    }
});
