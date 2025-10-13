cobratamanho = 25
let posicaoX = 400 - cobratamanho / 2
let posicaoY = 250 - cobratamanho / 2
let direcao = 'direita'
let comidaX;
let comidaY;
let larguraTela = 800;
let alturaTela = 500;
let cobrax = []
let cobray = []
let pontos = 3;
let frameRateJogo = 5;

function setup() {
  createCanvas(larguraTela, alturaTela);
  ataulizarComida()
  for (let i = 0; i < pontos; i++) {
    cobrax.push(posicaoX - i * cobratamanho);
    cobray.push(posicaoY)
  }
}

function draw() {
  frameRate(frameRateJogo);
  background(220);

  if (encostouNasBordasDaTela()) {
    noLoop();
  }

  desenharCobrar();
  desenharComida(comidaX, comidaY, 20);
  mudardirecao();
  movimentar();
}

function movimentar() {
  cabecax = cobrax[0];
  cabecay = cobray[0];
  if (direcao == 'esquerda') {
    cabecax = cabecax - cobratamanho;
  };
  if (direcao == 'direita') {
    cabecax = cabecax + cobratamanho;
  };
  if (direcao == 'cima') {
    cabecay = cabecay - cobratamanho;
  };
  if (direcao == 'baixo') {
    cabecay = cabecay + cobratamanho;
  };

  cobrax.unshift(cabecax);
  cobray.unshift(cabecay);

  cobrax.pop();
  cobray.pop();
}
function mudardirecao() {
  if (keyIsDown(RIGHT_ARROW) && direcao != 'esquerda') {
    direcao = 'direita'
  }
  if (keyIsDown(LEFT_ARROW) && direcao != 'direita') {
    direcao = 'esquerda'
  }
  if (keyIsDown(UP_ARROW) && direcao != 'baixo') {
    direcao = 'cima'
  }
  if (keyIsDown(DOWN_ARROW) && direcao != 'cima') {
    direcao = 'baixo'
  }


}

function ataulizarComida() {
  comidaX = floor(random(0, 780))
  comidaY = floor(random(0, 480))
}

function desenharComida(posicaoX, posicaoY, tamanho) {
  rect(posicaoX, posicaoY, tamanho, tamanho);
}

function encostouNasBordasDaTela() {
  let cabecax = cobrax[0];
  let cabecay = cobray[0];
  
  if (cabecax < 0 || cabecax > larguraTela - cobratamanho || cabecay < 0 || cabecay > alturaTela - cobratamanho) {
    return true;
  }
  return false;
}
function desenharCobrar() {
  for (let i = 0; i < cobrax.length; i++) {
    rect(cobrax[i], cobray[i], cobratamanho, cobratamanho)
  }
}