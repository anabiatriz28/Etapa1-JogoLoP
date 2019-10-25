/*
Equipe:
Aluna: Ana Biatriz Guedes do Nascimento.   -Subturma: 1C
Aluna: Mariana Brito Azevedo.              -Subturma: 1C(Líder)
Etapas: 5º e 6º
*/

var x = 300, y = 350; //objeto
var x1 = 25, y1 = 25; //obstáculo
var x2 = 100, y2 = 25; //obstáculo
var x3 = 175, y3 = 25; //obstáculo
var raiox = 15;
var raioo = 25;
var raiod = 3;
var estadoDisparo = false; //criação do estado de disparo
var xd = 0, yd = 0; //coordenadas iniciais do disparo
var vidas = 3; //número de vidas iniciais do jogador
var nivel = 1; //nível inicial do jogador
var pontos = 0; //pontuação inicial do jogador

function setup() {
  createCanvas(400, 400);
  //criar uma área de desenho 400x400
}


function draw() {
  background(0);// cor de fundo 
  textSize(18);
  fill(255,255,0);
  text("Pontuação: "+pontos,10,25); 
  text("Vidas: " + vidas,180, 25);
  text("Nível: "+ nivel, 330, 25); //textos para indicar a pontuação, quantidade de vidas e nível
  fill(255, 0, 255);
  ellipse(x1, y1, 2*raioo, 2*raioo); //obstáculo 1
  ellipse(x2, y2, 2*raioo, 2*raioo);//obstáculo 2
  ellipse(x3, y3, 2*raioo, 2*raioo);//obstáculo 3
  fill(255); //preencher
  
  ellipse(x, y, 2*raiox, 2*raiox); // criar uma elipse (posição-coordenada x, posição-coordenada y, largura, altura) - como a largura (30) e a altura (30) são iguais, a elipse vai corresponder a um círculo 
  
  movimentoObjeto();
  retornoLimites();
  movimentoObstaculos();
  disparo();
  colisao();
  //acertarAlvo();
  
  function movimentoObjeto(){
    if(keyIsDown(RIGHT_ARROW)){ 
      x = x + 6; 
    }
    if(keyIsDown(LEFT_ARROW)){ 
      x = x - 6; 
    }
    if (keyIsDown(UP_ARROW)){ 
      y = y - 6;
    }
    if (keyIsDown(DOWN_ARROW)){  
      y = y + 6;
    }
  }
 
 function retornoLimites(){
   if(x < 0){
      x = 400;
    }
    if(y > 370){ 
      y = 370;
    }
    if(x > 400){
      x = 0;
    }  
    if(y < 250){ 
      y = 250;
    }
 }
  function movimentoObstaculos(){
    y1 = y1 + 5;
    if(y1 > 400){
      y1 = -random(1000);// posição aleatória para o obstáculo ressurgir no eixo y 
      x1 = random(320); // posição aleatória para o obstáculo ressurgir no eixo x
      console.log(y1); 
      console.log(x1); 
    }
    y2 = y2 + 4;
    if(y2 > 400){
      y2 = -random(1000);
      x2 = random(320);
      console.log(y2);
      console.log(x2);
    }
    y3 = y3 + 6;
    if(y3 > 400){
      y3 = -random(2000);
      x3 = random(340);
      console.log(y3);
      console.log(x3);
    }
  }
  
  function disparo(){
    if(keyIsDown(32) && estadoDisparo == false){ //se a tecla for apertada, o disparo deve sair do meio do jogador
      xd = x; 
      yd = y;
      estadoDisparo = true;
    }
    if(estadoDisparo == true){
      ellipse(xd, yd, 2*raiod, 2*raiod); //criação do disparo
      yd = yd - 10; // movimentação do disparo
      if(yd < 0){
        estadoDisparo = false; //ao ultrapassar os limites da tela, não há mais disparo
      }
    }
  }
  function colisao(){
    if(dist(x, y, x1, y1) < raiox + raioo){
      x = 300;
      y = 350;
      vidas--;
    }
    if(dist(x, y, x2, y2) < raiox + raioo){
      x = 300;
      y = 350;
      vidas--;
    }
    if(dist(x, y, x3, y3) < raiox + raioo){
      x = 300;
      y = 350;
      vidas--
    }
    if(vidas <= 0){
      vidas = 0;
    }
  }
  /*function acertarAlvo(){
    if(dist(xd, yd, x1, y1) < raiod + raioo){
      pontos = pontos + 100;
    }
    if(dist(xd, yd, x2, y2) < raiod + raioo){
      pontos = pontos + 100;
    }
    if(dist(xd, yd, x3, y3) < raiod + raioo){
      pontos = pontos + 100;
    }
  }*/
}
