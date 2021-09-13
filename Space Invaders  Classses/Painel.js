class Painel
{
grid;
inimigo = new Inimigo();
jogador = new Jogador();
barreira = new Barreira();
dificuldade;
numerodeInimigos;
nivel;
constructor(grid, dificuldade, numerodeInimigos,nivel, jogador, barreira,inimigo)
{
    this.grid = grid;
    this.dificuldade = dificuldade;
    this.numerodeInimigos = numerodeInimigos;
    this.nivel = nivel;
    this.jogador = jogador;
    this.barreira = barreira;
    this. inimigo = inimigo;
}
    iniciar()
    {   
        //Inicia o Jogo e cria jogador
    }

    gameOver()
    {
        //Encerra o Jogo em caso de Vidas = 0 e o reinicia
    }
    colocarBarreira()
    {
        //Cria e pocisiciona as barreiras na grid
    }
    reposicionarInimigo()
    {
        //Cria os inimigos e os posiciona na grid quando numerodeInimigos = 0
    }
    mudarVelocidade()
    {
        //Quando os inimigos são destruidos aumenta a velocidade
        return this.nivel;
    }
}


