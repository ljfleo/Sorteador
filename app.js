
function gerarNumeroAleatorio(max, min) {
    // essa função gera os números aleatórios de um intervalo x a y
    return parseInt(Math.random() * (max - min) + min + 1);
}

function sortearNumeros() {
    // essa é a função principal, ela irá sortear os números que o usuário escolher
    let resultado = [];
    let comecoSorteio = 0;
    let numeroInicial = parseInt(document.getElementById('de').value);
    let numeroFinal = parseInt(document.getElementById('ate').value);
    let quantidadeDeNumeros = document.getElementById('quantidade').value;

    while (comecoSorteio < quantidadeDeNumeros) {
        resultado.push(gerarNumeroAleatorio(numeroFinal, numeroInicial))
        comecoSorteio++;

    }
    alterarMensagem('resultado', `Os números sorteados são : ${resultado}`);
}



function alterarMensagem(id, texto) {
    // essa função será utilizada para alterar as mensagens no front-end da aplicação
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}

function reiniciarJogo() {
    // essa função irá reiniciar o jogo do início

}


//O usuário precisa escolher uma quantidade de números, e nessa quantidade um intervalo entre x e y para sortear.
