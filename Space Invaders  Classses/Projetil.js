
class Projetil
{
    posicaox;
    posicaoy;
    tamanho;
    velocidade;
    tiroAliado;

    constructor(posicaox, posicaoy,tamanho,velocidade,tiroAliado)
    {
        this.posicaox = posicaox;
        this.posicaox = posicaoy;
        this.tamanho = tamanho;
        this.velocidade = velocidade;
        this.tiroAliado = tiroAliado;
    }

    mover(velocidade)
    {
        //Faz o projetil se mover
    }
    destruirAoContato()
    {
        //Ao chegar fora da grid ou tocar em player, barreira ou inimigo é destruido.
    }
}
