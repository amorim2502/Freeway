//CÓDIGO DO CARRO

let xCarros = [600, 600, 600, 600, 600, 600]; //posicao inicial do carro fora da tela
let yCarros = [40, 96, 150, 210, 270, 318]; //lista do y dos carros
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i],xCarros[i],yCarros[i],   comprimentoCarro, alturaCarro);
  } 
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
      xCarros[i] -= velocidadeCarros[i];
  }
  //print(xCarro); //testando a velocidade do carro
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaTela(xCarros[i])){
    xCarros[i] = 600;
    }
  }
}

function passouTodaTela(xCarro){
  return xCarro < -50;
}



