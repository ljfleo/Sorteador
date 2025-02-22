function gerarNumeroAleatorio(max, min) {
    // essa função gera os números aleatórios de um intervalo x a y
    return parseInt(Math.random() * (max - min) + min + 1);
}

function sortearNumeros() {
    // essa é a função principal, ela irá sortear os números que o usuário escolher
    let numeroEscolhido;
    let resultado = [];
    let comecoSorteio = 0;
    let numeroInicial = parseInt(document.getElementById('de').value);
    let numeroFinal = parseInt(document.getElementById('ate').value);
    let quantidadeDeNumeros = document.getElementById('quantidade').value;
    let quantidadeDePossibilidades = numeroFinal - numeroInicial;

    while (comecoSorteio < quantidadeDeNumeros) {
        if (quantidadeDePossibilidades < quantidadeDeNumeros) {
            alterarMensagem('resultado', 'A quantidade escolhida é maior que as possibilidades');
            break;
        } else {
            numeroEscolhido = gerarNumeroAleatorio(numeroFinal, numeroInicial);
            while (resultado.includes(numeroEscolhido)) {
                numeroEscolhido = gerarNumeroAleatorio(numeroFinal, numeroInicial);
            }
            resultado.push(numeroEscolhido);

            comecoSorteio++;
        }
        alterarMensagem('resultado', `Os números sorteados são : ${resultado}`);
    }


    document.getElementById('btn-reiniciar').className = 'container__botao';
}

function alterarMensagem(id, texto) {
    // essa função será utilizada para alterar as mensagens no front-end da aplicação
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}

function reiniciarJogo() {
    // essa função irá reiniciar o jogo do início
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