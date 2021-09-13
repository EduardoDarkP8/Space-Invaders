class Barreira
{
    vida;
    posicaox;
    posicaoy;
    formato;
    constructor(vida, posicaox, posicaoy, formato)
    {
        this.vida = vida;
        this.posicaox = posicaox;
        this.posicaoy = posicaoy;
        this.formato = formato;
    }
    destruir()
    {
        //Se vida = 0, destroi a barreira
    }
    danificar()
    {
        //retira vida ao contato com projetil
        return this.vida;
    }
}