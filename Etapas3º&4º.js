/*
Equipe:
Aluna: Ana Biatriz Guedes do Nascimento.   -Subturma: 1C
Aluna: Mariana Brito Azevedo.              -Subturma: 1C(Líder)
Etapas: 3º e 4º
*/

var x = 300, y = 350; //objeto
var x1 = 25, y1 = 25; //obstáculo
var x2 = 100, y2 = 25; //obstáculo
var x3 = 175, y3 = 25; //obstáculo
var estadoDisparo = false; //criação do estado de disparo
var xd = 0, yd = 0; //coordenadas iniciais do disparo

function setup() {
  createCanvas(400, 400);
  //criar uma área de desenho 400x400
}


function draw() {
  background(0); // cor de fundo (0 a 255) 0 - preto, 255 - branco
  square(x1, y1, 50); // criar um quadrado (posição-corresponde à coordenada x1, , posição-corresponde à coordenada y1,tamanho) - obstáculo
  square(x2, y2, 50);//obstáculo 2
  square(x3, y3, 50);//obstáculo 3
  fill(255); //preencher
 
  ellipse(x, y, 30, 30); // criar uma elipse (posição-coordenada x, posição-coordenada y, largura, altura) - como a largura (30) e a altura (30) são iguais, a elipse vai corresponder a um círculo
 

  //A função keyIsDown () serve para verificar se determinada tecla está sendo pressionada -movimentação do objeto (elipse)
  if(keyIsDown(RIGHT_ARROW)){
    //apertando a tecla da seta para a direita
    x = x + 6;
    //o objeto vai se movimentar no sentido da coordenada x - direita
  }
 
  if(keyIsDown(LEFT_ARROW)){
    //apertando a tecla da seta para a esquerda
    x = x - 6;
    //o objeto vai se movimentar no sentido da coordenada x - esquerda
  }
 
  if (keyIsDown(UP_ARROW)){
    //apertando a tecla da seta para cima
    y = y - 6;
    //o objeto vai se movimentar no sentido da coordenada y - para cima
  }
  if (keyIsDown(DOWN_ARROW)){
    //apertando a tecla da seta para baixo
    y = y + 6;
    //o objeto vai se movimentar no sentido da coordenada y - para baixo
  }
 
  //retornar a determinada posição ao atingir os limites
 if(x < 0){
    x = 400;
  }
 
  if(y > 370){ // limite da parte inferior da tela para o jogador
    y = 370;
  }
 
  if(x > 400){
    x = 0;
  }
 
  if(y < 250){ // limite da parte superior da tela (metade da tela) para o jogador
    y = 250;
  }
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
 
  if(keyIsDown(ENTER) && estadoDisparo == false){ //se a tecla for apertada, o disparo deve sair do meio do jogador
    xd = x;
    yd = y;
    estadoDisparo = true;
  }
  if(estadoDisparo == true){
    ellipse(xd, yd, 5, 5); //criação do disparo
    yd = yd - 10; // movimentação do disparo
    if(yd < 0){
      estadoDisparo = false; //ao ultrapassar os limites da tela, não há mais disparo
    }
  }
 
}
