document.addEventListener("DOMContentLoaded", () => {
    const forms = [
        document.getElementById("form-proprietario"),
        document.getElementById("form-veiculo"),
        document.getElementById("form-cliente"),
        document.getElementById("form-imagens"),
    ];

    const dados = {}; // Objeto para armazenar os dados dos formulários

    function capturarImagens(callback) {
        const imagemFrente = document.getElementById("imagem-frente").files[0];
        const imagemTraseira = document.getElementById("imagem-traseira").files[0];

        if (imagemFrente || imagemTraseira) {
            const leitores = [];
            if (imagemFrente) {
                const readerFrente = new FileReader();
                readerFrente.onload = function (e) {
                    dados["imagemFrente"] = e.target.result;
                    verificarLeitores(leitores, callback);
                };
                leitores.push(readerFrente);
                readerFrente.readAsDataURL(imagemFrente);
            }
            if (imagemTraseira) {
                const readerTraseira = new FileReader();
                readerTraseira.onload = function (e) {
                    dados["imagemTraseira"] = e.target.result;
                    verificarLeitores(leitores, callback);
                };
                leitores.push(readerTraseira);
                readerTraseira.readAsDataURL(imagemTraseira);
            }
        } else {
            callback(); // Continua se nenhuma imagem foi carregada
        }
    }

    // Função para verificar se os leitores terminaram
    function verificarLeitores(leitores, callback) {
        if (leitores.every((leitor) => leitor.readyState === 2)) {
            callback(); // Prossegue quando todos os leitores terminam
        }
    }

    // Função para esconder todos os formulários
    function esconderFormularios() {
        forms.forEach((form) => {
            form.style.display = "none";
        });
    }

    // Função para exibir o formulário atual
    function exibirFormulario(index) {
        esconderFormularios();
        forms[index].style.display = "flex"; // Exibe o formulário atual
    }

    // Função para capturar os dados de um formulário
    function capturarDadosFormulario(form) {
        const inputs = form.querySelectorAll("input[type='text']");
        const dadosFormulario = {};

        inputs.forEach((input) => {
            dadosFormulario[input.id] = input.value;
        });

        return dadosFormulario;
    }

    // Inicializa com o primeiro formulário
    exibirFormulario(0);

    // Adiciona evento de submit a cada formulário
    forms.forEach((form, index) => {
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // Impede o envio do formulário

            if (form.id === "form-imagens") {
                capturarImagens(() => {
                    localStorage.setItem("dadosFormularios", JSON.stringify(dados));
                    // Abre OS.html em uma nova guia
                    window.open("OS.html", "_blank");
                    // Redireciona para relatorio.html na guia atual
                    window.location.href = "relatorio.html";
                });
            } else {
                dados[form.id] = capturarDadosFormulario(form);
                if (index + 1 < forms.length) {
                    exibirFormulario(index + 1); // Vai para o próximo formulário
                }
            }
        });
    });
});
