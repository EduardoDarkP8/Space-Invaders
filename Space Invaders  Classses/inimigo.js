class Inimigo
{
    valorDePontos;
    tipoDeInimig;
    posicaox;
    posicaoy;
    tamanho;
    velocidade;
    cooldown;
    projetil = new Projetil();
    constructor(valorDePontos,tipoDeInimig,posicaox,posicaoy,tamanho,velocidade)
    {

        this.valorDePontos = valorDePontos;
        this.tipoDeInimig = tipoDeInimig;
        this.posicaox = posicaox;
        this.posicaoy = posicaoy;
        this.tamanho = tamanho;
        this.velocidade = velocidade;

    }
    atirar()
    {
        //Faz os inimigos atirarem de tempos em tempos baseado no Cooldown
    }
    destruir()
    {
        //Ao tocar projetil, é destruido.
    }   
    mover()
    {
        //movimenta os inimigos na grid
    }

}