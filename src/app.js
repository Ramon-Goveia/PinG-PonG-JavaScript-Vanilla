var folhaDesenho = document.getElementById("folha");
var areaDesenho = folhaDesenho.getContext("2d");

var larguraCampo = 600;
var alturaCampo = 500;
var larguraLinha = 10;
var larguraBola = 10;
var alturaRaquete = 100;
var posicaoBolaX = posicaoBolaY = 10;
        
areaDesenho.fillStyle = '#286047';
        
//Mesa
areaDesenho.fillRect(0, 0, larguraCampo, alturaCampo);

areaDesenho.fillStyle = '#ffffff';
        
//linha central
areaDesenho.fillRect(larguraCampo/2 - larguraLinha/2, 0, larguraLinha, alturaCampo);
        
//Raquete 1
areaDesenho.fillRect(0, 30, larguraLinha, alturaRaquete);
        
//Raquete 2
areaDesenho.fillRect(larguraCampo - larguraLinha, 330, larguraLinha, alturaRaquete);

//Bola "quadrada"
areaDesenho.fillRect(30, 30, larguraBola, larguraBola);

//Animação