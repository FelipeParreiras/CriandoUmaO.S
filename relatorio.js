document.addEventListener("DOMContentLoaded", () => {
    // Recupera os dados do localStorage
    const dados = JSON.parse(localStorage.getItem("dadosFormularios"));

    // Função para formatar a data atual
    function formatarDataAtual() {
        const agora = new Date();
        const dia = String(agora.getDate()).padStart(2, '0');
        const mes = String(agora.getMonth() + 1).padStart(2, '0'); // Janeiro é 0
        const ano = agora.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }

    // Insere as datas dinâmicas (se existirem no HTML)
    const dataEmissao = document.getElementById("data-emissao");
    if (dataEmissao) dataEmissao.textContent = formatarDataAtual();

    const dataValidade = document.getElementById("data-validade");
    if (dataValidade) dataValidade.textContent = `${formatarDataAtual().slice(0, -4)}${parseInt(formatarDataAtual().slice(-4)) + 1}`;

    // Preenche os dados do relatório
    if (dados) {
        // Dados do proprietário
        const proprietarioCampos = [
            "nome-proprietario",
            "cpf-proprietario",
            "endereco-proprietario",
            "numero-proprietario",
            "complemento-proprietario",
            "bairro-proprietario",
            "estado-proprietario",
            "cidade-proprietario",
            "cep-proprietario"
        ];

        proprietarioCampos.forEach((campo) => {
            const elemento = document.getElementById(campo);
            if (elemento && dados["form-proprietario"][campo]) {
                elemento.textContent = dados["form-proprietario"][campo];
            }
        });

        // Dados do veículo
        const veiculoCampos = [
            "placa-veiculo",
            "nota-fiscal",
            "chassi-veiculo",
            "tipo-veiculo",
            "marca-modelo",
            "combustivel-veiculo",
            "ano-fabricacao",
            "ano-modelo",
            "capacidade-veiculo",
            "potencia-veiculo",
            "categoria-veiculo",
            "cor-veiculo"
        ];

        veiculoCampos.forEach((campo) => {
            const elemento = document.getElementById(campo);
            if (elemento && dados["form-veiculo"][campo]) {
                elemento.textContent = dados["form-veiculo"][campo];
            }
        });

        // Exibe as imagens, se existirem
        if (dados["imagemFrente"]) {
            const imagemFrente = document.getElementById("imagem-frente-relatorio");
            if (imagemFrente) {
                imagemFrente.src = dados["imagemFrente"];
                imagemFrente.alt = "Foto da Frente do Veículo";
            }
        }

        if (dados["imagemTraseira"]) {
            const imagemTraseira = document.getElementById("imagem-traseira-relatorio");
            if (imagemTraseira) {
                imagemTraseira.src = dados["imagemTraseira"];
                imagemTraseira.alt = "Foto da Traseira do Veículo";
            }
        }
        if (dados.resultado) {
            document.getElementById("resultado-relatorio").textContent = dados.resultado;
        }
        
    } else {
        document.body.innerHTML = "<h1>Nenhum dado encontrado!</h1>";
    }
});
