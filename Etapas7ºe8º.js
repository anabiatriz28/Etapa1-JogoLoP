/*
Equipe:
Aluna: Ana Biatriz Guedes do Nascimento.-Subturma: 1C
Aluna: Mariana Brito Azevedo.           -Subturma: 1C(Líder)
Etapas 7º e 8º
*/


var x = 300, y = 563; //objeto
var x1 = 25, y1 = 25; //obstáculo1
var x2 = 200, y2 = 55; //obstáculo2
var xd = 0, yd = 0; //disparo
var estadoDisparo = false;
var vidas = 5; //quantidade de vidas iniciais
var pontos = 0; //quantidade de pontos iniciais
var nivel = 1; //nível inicial
var raioJ = 30, raioO = 25; //raios do jogador e dos obstáculos (tamanhos fixos)
var img, img1, img2, img3;
var vetorX = [], vetorY = [], vetortam = [], vetorV = [];
var qtdDeObstaculos = 4;
var barreiraDePontos = 1000;

function setup() {  
  createCanvas(600, 600);//criar uma área de desenho 600x600
  for(i = 0; i<qtdDeObstaculos; i++){ //Definindo todas as características dos obstáculos
    vetorX[i] = random (0, 600);
    vetorY[i] = random (0, 600);
    vetortam[i] = random (50, 50); //torna o tamanho fixo
      vetorV[i] = random (3, 5);
    }
}

function draw() {
  background(150); // cor de fundo
 
  fill(255); //preencher ellipse (jogador)
  //image(img,x,y,70,70);  
  //imageMode(CENTER);
  ellipse(x, y, 2*raioJ,2*raioJ); // criar uma elipse (posição-coordenada x, posição-coordenada y, largura, altura)
   
 
  //informações sobre o jogo na tela
  textSize(23);
  fill(0, 255, 255);
  text('Vidas: '+vidas, 10, 30);
  text('Pontuação: ' +pontos, 230, 30);
  text('Nível: ' +nivel, 510, 30);
 
  //chamando as funções
  MovimentoJogador();
  Disparo();
  RetornoLimites ();
  MovimentoObs();
  Colisao();
  barreiraPontos ();
  Obstaculos();
}


//função responsável por criar e movimentar os obstáculos
function Obstaculos(){
   //preencher obstáculos - susbtituir pela imagem depois
  //image(img2,x1,y1,70,70);  
  //imageMode(CENTER);
  for (i = 0; i<qtdDeObstaculos; i++){
    fill(255, 255, 0);
    ellipse(vetorX[i], vetorY[i], vetortam[i], vetortam[i]);//criar uma ellipse (posição-corresponde à coordenada x1, , posição-corresponde à coordenada y1,tamanho) - obstáculo
   
  }
}

//função responsável pela movimentação do jogador pelas teclas
function MovimentoJogador(){
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
}

// função para retornar a determinada posição ao atingir os limites (jogador)
function RetornoLimites() {
 if(x < 36){
    x = 36;
  }
 
  if(y >563){ //limite da parte inferior para o jogador
    y = 563;
  }
 
  if(x > 565){
    x = 565;
  }
 
  if(y < 36){ //limite da parte superior (metade da tela)
    y = 36;
  }
}

//função responsável pela movimentação dos obstáculos
function MovimentoObs() {  
  for (i = 0; i<qtdDeObstaculos; i++){
    if(nivel == 1){
      vetorY[i] = vetorY[i] + vetorV[i];
      if (vetorY[i]>600){
          vetorY[i] = random (-600, 0);
      }
    }else if(nivel == 2){
      vetorY[i] = vetorY[i] + 1.3*vetorV[i];
      if (vetorY[i]>600){
          vetorY[i] = random (-600, 0);
      }
    }else if(nivel == 3){
      vetorY[i] = vetorY[i] + 1.5*vetorV[i];
      if (vetorY[i]>600){
          vetorY[i] = random (-600, 0);
      }
    }else if(nivel == 4){
      vetorY[i] = vetorY[i] + 1.7*vetorV[i];
      if (vetorY[i]>600){
          vetorY[i] = random (-600, 0);
      }
    }else if(nivel == 5){
      vetorY[i] = vetorY[i] + 2*vetorV[i];
      if (vetorY[i]>600){
          vetorY[i] = random (-600, 0);
      }
    }
  }
}

//disparo
function Disparo(){
  if (keyIsDown(32) && estadoDisparo == false){ //se a tecla de espaço (Código Decimal ASCII - 32) for apertada, vai sair um disparo do meio do jogador
    xd = x;
    yd = y;
    estadoDisparo = true;
  }
  if(estadoDisparo == true){
  //image(img1,xd,yd,70,70);  
  //imageMode(CENTER);
    ellipse(xd, yd, 6, 6); //criação do disparo
    yd = yd - 10; // movimentação do disparo
    if(yd < 0){
      estadoDisparo = false; //ao ultrapassar os limites da tela, não há mais disparo
    }
  ColisaoDisparo();
  }
}

//função responsável pela colisão do jogador com os obstáculos
function Colisao(){
  for (i = 0; i<qtdDeObstaculos; i++){
  if (dist(x, y, vetorX[i], vetorY[i])<raioJ+raioO){ //obstáculo 1
    vetorX[i] = random(0, 600);
    vetorY[i] = -random(0, 600);
    vidas--;
    }
  if (vidas<=0){ //se a quantidade de vidas for menor ou igual a 0, vidas vai ser 0
    vidas=0;
    }
  }
}

//função responsável pela colisão do disparo com os obstáculos
function ColisaoDisparo(){
  for (i = 0; i<qtdDeObstaculos; i++){
    if (dist(xd,yd,vetorX[i],vetorY[i])<raioJ+raioO-3){ //disparo com o obstáculo 1
      vetorX[i] = random (0, 600);
      vetorY[i] = -random (0, 600);
      pontos+=100;
      estadoDisparo = false; //quando atingir o obstáculo, não haverá mais disparo
    }
  }
}

//inserir imagem
/*function preload() {
 img = loadImage("Imagens/Harry_Potter.png");
 img1 = loadImage("Imagens/voldemort.png");
 img2 = loadImage("Imagens/magiah.png");
}*/




//barreira de pontos
function barreiraPontos (){
  if (pontos > barreiraDePontos){
    nivel++;
    barreiraDePontos = barreiraDePontos + 1000;
  }
}
