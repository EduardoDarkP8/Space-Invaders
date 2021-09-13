class Player
{
vidas;
posicaox;
posicaoy;
tamanho;
velocidade;
projetilAlidado = new Projetil();
atirarCoolDown;
pontos;

constructor(vidas, posicaox, posicaoy, tamanho, velocidade,pontos)
{
    this.vidas = vidas;
    this.posicaox = posicaox;
    this.posicaoy = posicaoy;
    this.tamanho = tamanho;
    this.velocidade = velocidade;
    this;pontos = pontos;
}

atirar()
{
    //Atira se atirarCoolDown = 0 e o jogador precionar a tecla
}
destruir()
{
    //Caso ser tocado por um projetil, ele é destruido atualizarVida()
}
atualizarVida()
{
    //Diminui o numero de vidas
    return this.vidas;
}
mover()
{
    //Move o jogador para os lados 
}
addPontuacao(pontos)
{
    //Muda a pontuação
    return this.pontos;
}
}