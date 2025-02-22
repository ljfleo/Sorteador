function gerarNumeroAleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function sortearNumeros() {
    let numeroEscolhido;
    let sorteados = [];
    let numeroInicial = parseInt(document.getElementById('de').value);
    let numeroFinal = parseInt(document.getElementById('ate').value);
    let quantidadeDeNumeros = document.getElementById('quantidade').value;
    let quantidadeDePossibilidades = numeroFinal - numeroInicial;

    for (let i = 0; i < quantidadeDeNumeros; i++) {
        if (quantidadeDePossibilidades < quantidadeDeNumeros) {
            alterarMensagem('resultado', 'A quantidade escolhida é maior que as possibilidades');
            break;
        } else {
            numeroEscolhido = gerarNumeroAleatorio(numeroFinal, numeroInicial);
            while (sorteados.includes(numeroEscolhido)) {
                numeroEscolhido = gerarNumeroAleatorio(numeroFinal, numeroInicial);
            }
            sorteados.push(numeroEscolhido);
        }
        alterarMensagem('resultado', `Os números sorteados são : ${sorteados}`);
    }
    document.getElementById('btn-reiniciar').className = 'container__botao';
}

function alterarMensagem(id, texto) {
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}

function reiniciarJogo() {
    document.getElementById('btn-reiniciar').className = 'container__botao-desabilitado';
    limparCampo('resultado');
    limparCampo('de');
    limparCampo('ate');
    limparCampo('quantidade');
    alterarMensagem('resultado', 'Números sorteados: nenhum até agora');
}

function limparCampo(id) {
    let campo = document.getElementById(id);
    campo.value = '';
}