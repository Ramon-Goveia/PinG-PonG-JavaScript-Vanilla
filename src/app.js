window.onload = function(){
    setInterval(executar, 1000 / 30);
}

var folhaDesenho = document.getElementById("folha");
var areaDesenho = folhaDesenho.getContext("2d");

var larguraCampo = 600;
var alturaCampo = 500;
var alturaRaquete = 100;
var larguraLinha = 5;
var diametroBola = 10;
var efeitoRaquete = 0.3;
var velocidadeJogador2 = 5;
var posicaoJogador1 = posicaoJogador2 = 40;
var posicaoBolaX = posicaoBolaY = 10;
var velocidadeBolaPosicaoX = velocidadeBolaPosicaoY = 5;
var pontuacaoJogador1 = pontuacaoJogador2 = 0;

folhaDesenho.addEventListener('mousemove', function(e){
    posicaoJogador1 = e.clientY - alturaRaquete / 2;
});

function executar(){
    //Mesa       
    areaDesenho.fillStyle = '#286047';       
    areaDesenho.fillRect(0, 0, larguraCampo, alturaCampo);

    //linha central
    areaDesenho.fillStyle = '#ffffff';       
    areaDesenho.fillRect(larguraCampo / 2 - larguraLinha / 2, 0, larguraLinha, alturaCampo);
            
    //Raquete 1
    areaDesenho.fillRect(0, posicaoJogador1, larguraLinha, alturaRaquete);
            
    //Raquete 2
    areaDesenho.fillRect(larguraCampo - larguraLinha, posicaoJogador2, larguraLinha, alturaRaquete);
    
    //Bola "quadrada"
    areaDesenho.fillRect(posicaoBolaX - diametroBola / 2, posicaoBolaY - diametroBola / 2, diametroBola, diametroBola);

    //Pontuação dos jogadores
    areaDesenho.fillText("Humano - " + pontuacaoJogador1 + " pontos", 100, 100);
    areaDesenho.fillText("Computador - " + pontuacaoJogador2 + " pontos", larguraCampo -200, 100);
    
    posicaoBolaX = posicaoBolaX + velocidadeBolaPosicaoX;
    posicaoBolaY = posicaoBolaY + velocidadeBolaPosicaoY;
    
    //Verifica lateral superior
    if(posicaoBolaY < 0 && velocidadeBolaPosicaoY < 0){
        velocidadeBolaPosicaoY = -velocidadeBolaPosicaoY;
    }

    //verifica lateral inferior
    if(posicaoBolaY > alturaCampo && velocidadeBolaPosicaoY > 0){
        velocidadeBolaPosicaoY = -velocidadeBolaPosicaoY;
    }

    //Verifica pontuação jogador 2
    if(posicaoBolaX < 0){
        if(posicaoBolaY > posicaoJogador1 && posicaoBolaY < posicaoJogador1 + alturaRaquete){
            //Rebater bola
            velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX;

            var diferencaY = posicaoBolaY - (posicaoJogador1 + alturaRaquete / 2);
            velocidadeBolaPosicaoY = diferencaY * efeitoRaquete;
        }else{
            //ponto jogador 2
            pontuacaoJogador2 ++;
            //colocar bola no centro
            posicaoBolaX = larguraCampo / 2;
            posicaoBolaY = alturaCampo / 2;
            velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX;
            velocidadeBolaPosicaoY = 3;
        }
    }
    
    //Verifica pontuação jogador 1
    if(posicaoBolaX > larguraCampo){
        if(posicaoBolaY > posicaoJogador2 && posicaoBolaY < posicaoJogador2 + alturaRaquete){
            //Rebater bola
            velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX;

            var diferencaY = posicaoBolaY - (posicaoJogador2 + alturaRaquete / 2);
            velocidadeBolaPosicaoY = diferencaY * efeitoRaquete;
        }else{
            //Ponto jogador 1
            pontuacaoJogador1 ++;
            //colocar bola no centro
            posicaoBolaX = larguraCampo / 2;
            posicaoBolaY = alturaCampo / 2;
            velocidadeBolaPosicaoX = -velocidadeBolaPosicaoX;
            velocidadeBolaPosicaoY = 3;
        }
    }

    //Atualiza posição "jogador 2 computador"
    if(posicaoJogador2 + alturaRaquete / 2 < posicaoBolaY){
        posicaoJogador2 = posicaoJogador2 + velocidadeJogador2;
    }else{
        posicaoJogador2 = posicaoJogador2 - velocidadeJogador2;
    }
}