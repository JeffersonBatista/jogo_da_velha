var jogador = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
mudarJogador('X');

function escolherQuadrado(id){
    // Teste para verificar o click - console.log(id);
    console.log(id);
    var quadrado = document.getElementById(id);
    if(quadrado.innerHTML !== '-'){
        return;
    }
    quadrado.innerHTML = jogador;
    quadrado.style.color = 'white';
    if(jogador === 'X'){
        jogador = 'O';
    }else{
        jogador = 'X'
    }
    mudarJogador(jogador);
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}