let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function textoInicial() {
exibirTexto('h1', 'Jogo do Número Secreto');
exibirTexto('p', 'Escolha um número entre 1 e 10');
}

textoInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Parabéns!');
        let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = "Você acertou o número secreto em " + tentativas + " " + palavraTentativas + "!";
        exibirTexto('p', mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto) {
            exibirTexto('p', 'Número Secreto é menor.');
        } else {
            exibirTexto('p', 'Número Secreto é maior.');
        }
        tentativas++;
        limparCampo();

    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = "";
}

function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return numeroAleatorio();
    } else {
        console.log(numeroEscolhido);
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    textoInicial();
    tentativas = 1;
    document.getElementById("reiniciar").setAttribute("disabled", true);
}