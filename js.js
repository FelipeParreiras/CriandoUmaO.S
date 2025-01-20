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

    // Função para capturar o texto do resultado
    function capturarResultado() {
        const resultadoInput = document.getElementById("texto-resultado").value.trim();
        if (resultadoInput) {
            dados["resultado"] = resultadoInput;
        } else {
            dados["resultado"] =
                "O VEÍCULO ACIMA IDENTIFICADO FOI INSPECIONADO CONFORME DETERMINA A LEGISLAÇÃO DE TRÂNSITO VIGENTE NO PAÍS, SENDO CONSIDERADO APTO PARA TRAFEGAR PELAS VIAS PÚBLICAS.\n\n" +
                "Encontra-se em adequadas condições de manutenção, preservação, segurança e conservação de suas características técnicas. Veículo não possui avarias na lataria.";
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

    // Copiar dados do proprietário para o cliente
    document.getElementById("mesmo-proprietario").addEventListener("change", (event) => {
        if (event.target.checked) {
            const proprietarioDados = capturarDadosFormulario(document.getElementById("form-proprietario"));
            for (const key in proprietarioDados) {
                const clienteInput = document.getElementById(key.replace("proprietario", "cliente"));
                if (clienteInput) {
                    clienteInput.value = proprietarioDados[key];
                }
            }
        }
    });

    // Inicializa com o primeiro formulário
    exibirFormulario(0);

    // Adiciona evento de submit a cada formulário
    forms.forEach((form, index) => {
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // Impede o envio do formulário

            if (form.id === "form-imagens") {
                capturarResultado(); // Captura o texto do resultado
                capturarImagens(() => {
                    localStorage.setItem("dadosFormularios", JSON.stringify(dados));

                    // Abrir páginas em sequência, sem bloqueios
                    const relatorioWindow = window.open("relatorio.html", "_blank");
                    window.location.href = "os.html";

                    if (!relatorioWindow) {
                        alert("Por favor, permita pop-ups no seu navegador para visualizar os documentos!");
                    }
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
