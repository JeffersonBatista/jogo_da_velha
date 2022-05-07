var jogador = null;
var vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrado = document.getElementsByClassName('quadrado');
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
    checarVencedor();
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checarVencedor(){
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if(checarSequencia(quadrado1, quadrado2, quadrado3)){
        mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
    }
}

function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3){
    quadrado1.style.color = 'red';
    quadrado2.style.color = 'red';
    quadrado3.style.color = 'red';
}

function checarSequencia(quadrado1, quadrado2, quadrado3){
    var igual = false;
    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        igual = true;
    }
    return igual;
}