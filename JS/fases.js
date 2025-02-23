// JS QUE CARREGA A INTERFACE -----------------------------------------------
var canvas = document.getElementById("gameCanvas"); // Pegando o canvas
var context = canvas.getContext("2d"); // Obtendo o contexto 2D

var executarFuncao = true; // Variável que define quando determinada função é chamada ou não

// Pegando a altura e largura exatas da página web
var alturaPagina = 720;
var larguraPagina = 1120;

canvas.width = larguraPagina; // Atribuindo a largura da página para o tamanho do canvas
canvas.height = alturaPagina; // Atribuindo a altura da página para o tamanho do canvas

var imgInterfaceLoaded = false; // Variável para verificar se a imagem da interface foi carregada
var imgFundoLoaded = false; // Variável para verificar se a imagem de fundo foi carregada
var imgBotaoLoaded = false; // Variável para verificar se a imagem do botão foi carregada

var imagemInterface = {
    interface: "interface.png" // Pegando o caminho da imagem
};

var imagemBotaoCarregar = {
    botao: "btnCarregar.png" // Pegando o caminho da imagem do botão
};

var imagemBotaoJogar = {
    botao: "btnJogar.png" // Pegando o caminho da imagem do botão
};

var imagemBotaoOpcoes = {
    botao: "btnOpcoes.png" // Pegando o caminho da imagem do botão
};

var imagemBotaoSobre = {
    botao: "btnSobre.png" // Pegando o caminho da imagem do botão
};

//Dimensões de todos os botões
var botaoLargura = 400;
var botaoAltura = 110;

// Coordenadas do botão de carregar
var botaoCarregarX = 315;
var botaoCarregarY = 610;

// Coordenadas do botão de jogar
var botaoJogarX = 40;
var botaoJogarY = 610;

// Coordenadas do botão de opções
var botaoOpcoesX = 612;
var botaoOpcoesY = 600;

// Coordenadas do botão de sobre
var botaoSobreX = 845;
var botaoSobreY = 600;

// Função que carrega a interface inicial
function carregaInterface() {
    for (var i in imagemInterface) {
        var imgInterface = new Image();
        imgInterface.src = "IMG/" + imagemInterface[i];
        // Quando a imagem é carregada
        imgInterface.onload = function() {
            imagemInterface[i] = imgInterface; // Substituindo a string pela imagem
            imgInterfaceLoaded = true; // Definindo que a imagem da interface está carregada
            console.log("Imagem da interface carregada");
            drawInterface(); // Desenha a imagem inicialmente
            checkAllLoaded();
        }
    }
}

// Função que carrega a imagem do botão
function carregaImagemBotaoCarregar(){ // Carrega o botão de carregar
    for (var i in imagemBotaoCarregar) {
        var imgBotaoCarregar = new Image();
        imgBotaoCarregar.src = "IMG/" + imagemBotaoCarregar[i];
        // Quando a imagem é carregada
        imgBotaoCarregar.onload = function() {
            imagemBotaoCarregar[i] = imgBotaoCarregar; // Substituindo a string pela imagem
            imgBotaoLoaded = true; // Definindo que a imagem do botão está carregada
            console.log("Imagem do botão carregada");
            drawBotao(); // Desenha o botão inicialmente
            checkAllLoaded();
        }
    }
}

function carregaImagemBotaoJogar(){ // Carrega o botão de jogar
    for (var j in imagemBotaoJogar) {
        var imgBotaoJogar = new Image();
        imgBotaoJogar.src = "IMG/" + imagemBotaoJogar[j];
        // Quando a imagem é carregada
        imgBotaoJogar.onload = function() {
            imagemBotaoJogar[j] = imgBotaoJogar; // Substituindo a string pela imagem
            imgBotaoLoaded = true; // Definindo que a imagem do botão está carregada
            console.log("Imagem do botão carregada");
            drawBotao(); // Desenha o botão inicialmente
            checkAllLoaded();
        }
    }
}

function carregaImagemBotaoOpcoes(){ // Carrega o botão de opções
    for (var l in imagemBotaoOpcoes) {
        var imgBotaoOpcoes = new Image();
        imgBotaoOpcoes.src = "IMG/" + imagemBotaoOpcoes[l];
        // Quando a imagem é carregada
        imgBotaoOpcoes.onload = function() {
            imagemBotaoOpcoes[l] = imgBotaoOpcoes; // Substituindo a string pela imagem
            imgBotaoLoaded = true; // Definindo que a imagem do botão está carregada
            console.log("Imagem do botão carregada");
            drawBotao(); // Desenha o botão inicialmente
            checkAllLoaded();
        }
    }
}

function carregaImagemBotaoSobre(){ // Carrega o botão de sobre
    for (var d in imagemBotaoSobre) {
        var imgBotaoSobre = new Image();
        imgBotaoSobre.src = "IMG/" + imagemBotaoSobre[d];
        // Quando a imagem é carregada
        imgBotaoSobre.onload = function() {
            imagemBotaoSobre[d] = imgBotaoSobre; // Substituindo a string pela imagem
            imgBotaoLoaded = true; // Definindo que a imagem do botão está carregada
            console.log("Imagem do botão carregada");
            drawBotao(); // Desenha o botão inicialmente
            checkAllLoaded();
        }
    }
}

function drawInterface() {
    if (!imgInterfaceLoaded) return; // Se a imagem carregou, retorne

    // Desenha a parte da imagem no canvas
    context.drawImage(imagemInterface.interface, 0, 0, canvas.width + 20, canvas.height + 20);
}

function drawBotao() {
    if (!imgBotaoLoaded) return; // Se a imagem do botão não carregou, retorne

    // Desenha a imagem do botão no canvas
    context.drawImage(imagemBotaoCarregar.botao,
        botaoCarregarX, botaoCarregarY, botaoLargura - 75, botaoAltura);
    // Desenha a imagem do botão no canvas
    context.drawImage(imagemBotaoJogar.botao,
        botaoJogarX, botaoJogarY, botaoLargura, botaoAltura);
    // Desenha a imagem do botão no canvas
    context.drawImage(imagemBotaoOpcoes.botao,
        botaoOpcoesX, botaoOpcoesY, botaoLargura - 150, botaoAltura + 10);
    // Desenha a imagem do botão no canvas
    context.drawImage(imagemBotaoSobre.botao,
        botaoSobreX, botaoSobreY, botaoLargura - 50, botaoAltura);
}

// Verifica se todas as imagens foram carregadas
function checkAllLoaded() {
    if (imgInterfaceLoaded && imgFundoLoaded && imgBotaoLoaded) {
        // Desenha a imagem, o botão e o quadrado depois que todas as imagens foram carregadas
        draw();
    }
}

// Função para desenhar a interface, imagem de fundo, botão e quadrado
function draw() {
    drawInterface();
    drawBotao();
    desenhaColisao();
}

// Função para desenhar o quadrado de colisão
function desenhaColisao() {
    // Ajusta a posição X do quadrado com base na posição da imagem
    var quadradoX = canvas.width / 5 - x;
    var quadradoY = canvas.height / 2;

    context.beginPath();
    context.fillStyle = "rgba(0, 0, 0, 0.5)"; // Define a cor com 50% de transparência
    context.fillRect(quadradoX, quadradoY, 300, 100);
    context.closePath();
}

// Carregar as imagens
carregaInterface();
carregaImagemBotaoCarregar();
carregaImagemBotaoJogar();
carregaImagemBotaoOpcoes();
carregaImagemBotaoSobre();

// Event listener para detectar cliques no botão
canvas.addEventListener("click", function(event) {
    var rect = canvas.getBoundingClientRect();
    var mouseX = event.clientX - rect.left;
    var mouseY = event.clientY - rect.top;

    // Verifica se o clique está dentro da área do botão
    if (mouseX >= botaoCarregarX && mouseY >= botaoCarregarY
        && mouseX <= botaoCarregarX + botaoLargura && mouseY <= botaoCarregarY + botaoAltura) {
        // Chama a função do botão aqui
        botaoClicado();
    }
    // Verifica se o clique está dentro da área do botão
    if (mouseX >= botaoJogarX && mouseY >= botaoJogarY
        && mouseX <= botaoJogarX + botaoLargura && mouseY <= botaoJogarY + botaoAltura) {
        // Chama a função do botão aqui
        botaoClicadoJogar();
    }
    // Verifica se o clique está dentro da área do botão
    if (mouseX >= botaoOpcoesX && mouseY >= botaoOpcoesY
        && mouseX <= botaoOpcoesX + botaoLargura && mouseY <= botaoOpcoesY + botaoAltura) {
        // Chama a função do botão aqui
        botaoClicado();
    }
    // Verifica se o clique está dentro da área do botão
    if (mouseX >= botaoSobreX && mouseY >= botaoSobreY
        && mouseX <= botaoSobreX + botaoLargura && mouseY <= botaoSobreY + botaoAltura) {
        // Chama a função do botão aqui
        botaoClicado();
    }
});

function botaoClicado() {
    // Função executada quando o botão é clicado
    console.log("Botão clicado");
}

// JS QUE CARREGA A SPRITESHEET -----------------------------------------------

var valor = 6; // Variável global 'valor' inicializada com 6

// Variáveis globais para os quadrados de colisão
var quadradosDeColisao = [
    { x: 100, y: 100, largura: 70, altura: 70 },
    { x: 200, y: 200, largura: 70, altura: 70 },
    { x: 300, y: 300, largura: 70, altura: 70 }
];

// Função para desenhar os quadrados de colisão
function desenharQuadradosDeColisao(context) {
    context.strokeStyle = "rgba(0, 0, 0, 0)";
    context.lineWidth = 2;
    quadradosDeColisao.forEach(function(quadrado) {
        context.strokeRect(quadrado.x, quadrado.y, quadrado.largura, quadrado.altura);
    });
}

// Construtor para a classe Spritesheet, que gerencia sprites de uma imagem
function Spritesheet(context, imagem, linhas, colunas) {
    this.context = context; // Contexto do canvas onde a spritesheet será desenhada
    this.imagem = imagem; // Objeto de imagem contendo a spritesheet
    this.numLinhas = linhas; // Número de linhas de sprites na imagem
    this.numColunas = colunas; // Número de colunas de sprites na imagem
    this.intervalo = 0; // Intervalo entre frames para animação
    this.diferenca = 0; // Diferença de quadros a serem exibidos
    this.coluna = 0; // Coluna inicial da spritesheet
    this.linha = 0; // Linha atual da spritesheet
}

// Métodos para a classe Spritesheet
Spritesheet.prototype = {
    // Método para avançar para o próximo quadro na animação
    proximoQuadro: function() {
        // Obtém o momento atual em milissegundos
        var agora = new Date().getTime();

        // Se não temos o último tempo medido, inicialize-o
        if (!this.ultimoTempo) this.ultimoTempo = agora;

        // Verifica se é hora de mudar o quadro
        if (agora - this.ultimoTempo < this.intervalo) return;

        // Avança para o próximo quadro ou reseta para o primeiro quadro
        if (this.coluna < this.numColunas - 1 - this.diferenca)
            this.coluna++;
        else
            this.coluna = 0;

        // Atualiza o último tempo de mudança de quadro
        this.ultimoTempo = agora;
    },
    // Método para desenhar o quadro atual da spritesheet no canvas
    desenhar: function(x, y) {
        // Calcula a largura e altura de cada quadro na spritesheet
        var largura = this.imagem.width / this.numColunas;
        var altura = this.imagem.height / this.numLinhas;

        // Desenha o quadro atual no canvas
        this.context.drawImage(
            this.imagem,
            largura * this.coluna,
            altura * this.linha,
            largura,
            altura,
            x,
            y,
            largura / valor, // Reduz a largura do quadro para o tamanho desejado
            altura / valor // Reduz a altura do quadro para o tamanho desejado
        );
    }
}

// Construtor para a classe Animacao, que gerencia a animação de sprites
function Animacao(context) {
    this.context = context; // Contexto do canvas
    this.sprites = []; // Array de sprites a serem animados
    this.ligado = false; // Estado da animação (ligada/desligada)
}

// Métodos para a classe Animacao
Animacao.prototype = {
    // Método para adicionar um novo sprite à animação
    novoSprite: function(sprite) {
        this.sprites.push(sprite); // Adiciona um novo sprite à animação
    },
    // Método para ligar a animação
    ligar: function() {
        this.ligado = true; // Liga a animação
        this.proximoFrame(); // Inicia a animação
    },
    // Método para desligar a animação
    desligar: function() {
        this.ligado = false; // Desliga a animação
    },
    // Método para atualizar e desenhar o próximo frame da animação
    proximoFrame: function() {
        if (!this.ligado) return; // Se a animação está desligada, sai da função

        // Atualiza e desenha todos os sprites
        desenharQuadradosDeColisao(this.context); // Desenha os quadrados de colisão
        for (var i in this.sprites)
            this.sprites[i].atualizar();
        for (var i in this.sprites)
            this.sprites[i].desenhar();

        // Solicita o próximo frame da animação
        var animacao = this;
        requestAnimationFrame(function() {
            animacao.proximoFrame();
        });
    }
};

// Códigos das teclas para controle
var TECLA_W = 87; // Código da tecla 'W'
var TECLA_A = 65; // Código da tecla 'A'
var TECLA_D = 68; // Código da tecla 'D'

// Construtor para a classe Teclado, que gerencia o estado das teclas
function Teclado(elemento) {
    this.elemento = elemento; // Elemento HTML que recebe os eventos de teclado
    this.pressionadas = []; // Array que armazena o estado das teclas pressionadas

    // Eventos de teclado para atualizar o estado das teclas
    var teclado = this;
    elemento.addEventListener('keydown', function(evento) {
        var tecla = evento.keyCode;
        teclado.pressionadas[tecla] = true; // Marca a tecla como pressionada
    });
    elemento.addEventListener('keyup', function(evento) {
        teclado.pressionadas[evento.keyCode] = false; // Marca a tecla como não pressionada
    });
}

// Método para verificar se uma tecla está pressionada
Teclado.prototype = {
    pressionada: function(tecla) {
        return this.pressionadas[tecla];
    }
};

// Códigos para direções do personagem 'Sky'
var SKY_DIREITA = 1;
var SKY_ESQUERDA = 2;
var SKY_VOAR = 4;
var ALTURA_MAXIMA_VOAR = 250; // Altura máxima que o pássaro pode alcançar (metade da tela)
var valor = 2;

// Construtor para a classe Sky, que gerencia o personagem
function Sky(context, teclado, imagem) {
    this.context = context;
    this.teclado = teclado;
    this.x = 0;
    this.y = 0;
    this.velocidade = 3;
    this.voando = false;

    // Posições iniciais
    this.posicaoInicialX = this.x;
    this.posicaoInicialY = this.y;

    // Criando a spritesheet
    this.sheet = new Spritesheet(context, imagem, 6, 15);
    this.sheet.intervalo = 40;
    this.sheet.diferenca = 6;

    // Estado inicial
    this.andando = false;
    this.direcao = SKY_DIREITA;
}

var posicaoXs; // Armazenar as cordenadas x da arara
var posicaoYs; // Armazenar as cordenadas y da arara

// Métodos para a classe Sky
Sky.prototype = {
    // Método para atualizar a posição e estado do personagem
    atualizar: function() {
        var teclaWPressionada = this.teclado.pressionada(TECLA_W);
        var teclaAPressionada = this.teclado.pressionada(TECLA_A);
        var teclaDPressionada = this.teclado.pressionada(TECLA_D);

        if (teclaDPressionada) {
            if(this.voando){
                if(this.x < canvas.width / 2 - 200){
                    this.x += this.velocidade;
                }
                posicaoXs = this.x;
                if (this.y < this.posicaoInicialY && !teclaWPressionada) {
                    this.y += this.velocidade;
                    posicaoYs = this.y
                    if (this.y > this.posicaoInicialY) {
                        this.y = this.posicaoInicialY;
                        posicaoYs = this.y;
                    }
                }

                this.sheet.proximoQuadro();
                
            } else if (!this.andando || this.direcao != SKY_DIREITA) {
                this.sheet.linha = 0;
                this.sheet.coluna = 1;
            }
            this.andando = true;
            this.direcao = SKY_DIREITA;
            if(!this.voando){
                this.sheet.proximoQuadro();
            }

            // Não deixa a arara sair do canvas
            if(this.x < canvas.width / 2 - 200){
                this.x += this.velocidade;
            }
            
            posicaoXs = this.x;

        } else if (teclaAPressionada) {
            if (!this.andando || this.direcao != SKY_ESQUERDA) {
                this.sheet.linha = 1;
                this.sheet.coluna = 0;
            }

            this.andando = true;
            this.direcao = SKY_ESQUERDA;
            this.sheet.proximoQuadro();

            // Não deixa a arara sair do canvas
            if(this.x > canvas.width - 1200){
                this.x -= this.velocidade;
            }
            
            posicaoXs = this.x;

        } else if (teclaWPressionada && teclaDPressionada){
            if (!this.voando) {
                this.sheet.linha = 4;
                this.sheet.coluna = 0;
                this.posicaoInicialY = this.y;
            }

            this.direcao = SKY_VOAR;
            this.voando = true;

            // Mover o pássaro para cima até a altura máxima
            if (this.y > ALTURA_MAXIMA_VOAR) {
                this.y -= this.velocidade;
                posicaoYs = this.y;
            } 

            // Continuar movimento lateral enquanto voa
            this.x += this.velocidade;
            posicaoXs = this.x;

            this.sheet.proximoQuadro();
        } else if (teclaWPressionada) {
            if (!this.voando) {
                this.sheet.linha = 4;
                this.sheet.coluna = 0;
                this.posicaoInicialY = this.y;

            }

            this.direcao = SKY_VOAR;
            this.voando = true;

            // Mover o pássaro para cima até a altura máxima
            if (this.y < ALTURA_MAXIMA_VOAR) {
                this.y -= this.velocidade;
                posicaoYs = this.y;
            } 

            this.sheet.proximoQuadro();
        } else {
            if (this.voando) {
                this.sheet.linha = 4;
                this.sheet.coluna = 0;
                // Retornar à posição inicial Y de forma suave após atingir a altura máxima
                    if (this.y < this.posicaoInicialY) {
                        this.y += this.velocidade + 5;
                        posicaoYs=this.y;
                        if (this.y > this.posicaoInicialY) {
                            this.y = this.posicaoInicialY;
                            posicaoYs=this.y;
                        }
                    } else {
                        this.y = this.posicaoInicialY;
                        posicaoYs = this.y;
                        this.voando = false;
                        this.alcancouAlturaMaxima = false;
                        this.sheet.linha = 0;
                        this.andando = false;
                    }
            }

           if (!teclaAPressionada && !teclaDPressionada) {
                if (this.direcao == SKY_DIREITA) {
                    this.sheet.coluna = 0;
                } else if (this.direcao == SKY_ESQUERDA) {
                    this.sheet.coluna = 1;
                }

                this.sheet.linha = 0;
                this.andando = false;
            }
        }
        
        // Atualiza a posição dos quadrados de colisão para acompanhar a spritesheet
        quadradosDeColisao.forEach(function(quadrado) {
            quadrado.x = this.x + 300;
            quadrado.y = this.y + 300;
        }, this);
    },
    // Método para desenhar o personagem no canvas
    desenhar: function() {
        this.sheet.desenhar(this.x + 300, this.y + 300);
    }
};

// Função para verificar colisões
function verificarColisao(quadrado1, quadrado2) {
    return (
        quadrado1.x < quadrado2.x + quadrado2.largura &&
        quadrado1.x + quadrado1.largura > quadrado2.x &&
        quadrado1.y < quadrado2.y + quadrado2.altura &&
        quadrado1.y + quadrado1.altura > quadrado2.y
    );
}

// Função para verificar colisões entre Sky e quadrados de colisão
function verificarColisoesSky(sky) {
    var skyRect = {
        x: sky.x + 300,
        y: sky.y + 300,
        largura: sky.sheet.imagem.width / sky.sheet.numColunas / valor,
        altura: sky.sheet.imagem.height / sky.sheet.numLinhas / valor
    };
    
    quadradosDeColisao.forEach(function(quadrado) {
        if (verificarColisao(skyRect, quadrado)) {
            console.log("Colisão detectada!");
        }
    });
}

// Variáveis globais para os quadrados de colisão da sky
var quadradosDeColisaoSky = [
    { x: 100, y: 100, largura: 50, altura: 50 },
    { x: 200, y: 200, largura: 50, altura: 50 },
    { x: 300, y: 300, largura: 50, altura: 50 }
];

// Função para desenhar os quadrados de colisão da sky
function desenharQuadradosDeColisaoSky(context) {
    context.strokeStyle = 'blue';
    context.lineWidth = 2;
    quadradosDeColisaoSky.forEach(function(quadrado) {
        context.strokeRect(quadrado.x, quadrado.y, quadrado.largura, quadrado.altura);
    });
}

// Quando o botão jogar for clicado, chama as funções do jogo
function botaoClicadoJogar(){
    console.log("Jogo iniciado");

    carregarFiguras(); // Carrega a imagem de fundo
    requestAnimationFrame(moverCarro);
    setInterval(desenhar, 10);
    setInterval(passar, 100);
    setInterval(colisor, 10);

    // Carregar a spritesheet da Sky
    var teclado = new Teclado(document);
    var animacao = new Animacao(context);

    var imgSky = new Image(); 
    imgSky.src = "IMG/Freesky.png";
    var sky = new Sky (context, teclado, imgSky);
    sky.x = 0;
    sky.y = 200;
    console.log(sky.y);
    animacao.novoSprite(sky);

    imgSky.onload = function (){                                                                                                                                                              
        animacao.ligar();
    }
}

// FASE DA CIDADE -----------------------------------------------

var chamarFuncao = true; // Controle para se uma função é chamada ou não

// Objeto contendo a URL da imagem
var fundoCidade = {
    cidade: "town.png"
};

var imagemCarregada = false; // Variável para verificar se a imagem foi carregada

var pontoAparicaoCarro = canvas.width + 100; // Ponto onde o carro deve aparecer

// Função para carregar a imagem
function carregarFiguras() {
    for (var indice in fundoCidade) {
        var imagem = new Image();
        imagem.src = "IMG/" + fundoCidade[indice]; // Definindo o src da imagem
        // Quando a imagem é carregada
        imagem.onload = function() {
            fundoCidade[indice] = imagem;
            // Definindo que a imagem está carregada
            imagemCarregada = true;
            console.log("Imagem carregada");
            desenhar(); // Desenha a imagem inicialmente
        };
    }
}

// Variáveis para controlar a posição e velocidade da imagem
var posicaoFundoX = 0; // Posição x da imagem de fundo
var posicaoX = 3000; // Define a posição inicial x do carro
var larguraCarro = 254; // Largura do carro redimensionado no canvas
var alturaCarro = 124; // Altura do carro redimensionado no canvas
var velocidadeCarro = 5; // Velocidade de movimento do carro
var velocidadeFundo = 40; // Velocidade de movimento do fundo
var velocidadeBaseCarro = 4; // Velocidade base do carro
var incrementoVelocidade = 0.5; // Incremento de velocidade do carro

// Valor extra para o limite direito (em pixels)
var limiteExtra = 60;

// Define a coluna inicial da spritesheet como 0
var coluna = 0;

// Cria um objeto Image para carregar a imagem do carro
var carro = new Image();
carro.src = "IMG/carro.png"; // Define o caminho da imagem do carro

// Variáveis globais para os quadrados de colisão do carro
var quadradosDeColisaoCarro = [
    { x: 0, y: 0, largura: 200, altura: 100 },
    { x: 0, y: 0, largura: 200, altura: 100 },
    { x: 0, y: 0, largura: 200, altura: 100 }
];

// Função para desenhar os quadrados de colisão do carro
function desenharQuadradosDeColisaoCarro(context) {
    context.strokeStyle = "rgba(0, 0, 0, 0)";
    context.lineWidth = 2;
    quadradosDeColisaoCarro.forEach(function(quadrado) {
        context.strokeRect(quadrado.x, quadrado.y, quadrado.largura, quadrado.altura);
    });
}

// Função para desenhar o fundo e o carro no canvas
function desenhar() {
    if (!imagemCarregada) return; // Se as imagens não carregaram, a função não é chamada

    // Coordenadas da parte da imagem que queremos cortar
    var cidadeX = posicaoFundoX; // Atualizar a posição horizontal da imagem de fundo
    var cidadeY = 0; // Começar no topo da imagem
    var cidadeWidth = canvas.width; // Largura do canvas (garantir que apenas a largura do canvas seja desenhada)
    var cidadeHeight = fundoCidade.cidade.height; // Altura total da imagem

    // Coordenadas e tamanho no canvas onde a parte da imagem será desenhada
    var cityX = 0; // Começar no canto esquerdo do canvas
    var cityY = 0; // Começar no topo do canvas
    var cityWidth = canvas.width; // Largura do canvas
    var cityHeight = canvas.height; // Altura do canvas

    // Desenha a parte da imagem no canvas
    context.drawImage(fundoCidade.cidade, cidadeX, cidadeY,
        cidadeWidth, cidadeHeight, cityX, cityY, cityWidth, cityHeight);

    // Desenha o carro na posição atual, somente se a posição do fundo for maior ou igual ao ponto de aparição
    if (posicaoFundoX >= pontoAparicaoCarro) {
        context.drawImage(
            carro, // Imagem do carro
            816 * coluna, 0, // Posição x, y da imagem a ser desenhada (baseado na coluna atual)
            816, 418, // Largura e altura do recorte da imagem
            posicaoX, // Posição x onde o carro será desenhado no canvas
            canvas.height - 250, // Posição y onde o carro será desenhado no canvas (na base do canvas)
            larguraCarro, alturaCarro // Largura e altura do carro redimensionado no canvas
        );

        // Atualiza a posição dos quadrados de colisão do carro para acompanhar a posição do carro
        var centroX = posicaoX + larguraCarro / 2;
        var centroY = canvas.height - 250 + alturaCarro / 2;

        quadradosDeColisaoCarro.forEach(function(quadrado) {
            quadrado.x = centroX - quadrado.largura / 2;
            quadrado.y = centroY - quadrado.altura / 2;
        });

        // Desenha os quadrados de colisão do carro
        desenharQuadradosDeColisaoCarro(context);
    }
}

// Função para atualizar a coluna da spritesheet
function passar() {
    // Avança para a próxima coluna da spritesheet
    if (coluna < 8) {
        coluna += 1; // Incrementa a coluna
    } else if (coluna == 8) {
        coluna = 0; // Reinicia a coluna para 0 quando chegar à última coluna
    }
}

// Função para atualizar a posição do carro automaticamente
function moverCarro() {
    posicaoX -= velocidadeCarro;
    if (posicaoX + larguraCarro < 0) {
        posicaoX = canvas.width; // Reinicia o carro do lado direito quando ele sai da tela
    }

    requestAnimationFrame(moverCarro);
}

// Event listener para detectar as teclas pressionadas
document.addEventListener('keydown', function(evento) {
    if (evento.key === 'd' || evento.key === 'D') {
        // Verifica se a imagem não ultrapassa o limite direito
        if (posicaoFundoX + canvas.width < fundoCidade.cidade.width - limiteExtra) {
            posicaoFundoX += velocidadeFundo; // Move a imagem de fundo para a direita
            velocidadeCarro = Math.min(velocidadeCarro + incrementoVelocidade, 10); // Aumenta a velocidade do carro até um máximo de 20
        }
    } else if (evento.key === 'a' || evento.key === 'A') {
        // Verifica se a imagem não ultrapassa o limite esquerdo
        if (posicaoFundoX > 0) {
            posicaoFundoX -= velocidadeFundo; // Move a imagem de fundo para a esquerda
            // Diminui a velocidade do carro até um mínimo de 1
            velocidadeCarro = Math.max(velocidadeCarro - incrementoVelocidade, 1); 
        }
    }
});

// Event listener para detectar quando as teclas são soltas
document.addEventListener('keyup', function(evento) {
    if (evento.key === 'd' || evento.key === 'D' || evento.key === 'a' || evento.key === 'A') {
        velocidadeCarro = velocidadeBaseCarro; // Reseta a velocidade do carro para a base
    }
});

function colisor() {
    if (posicaoFundoX >= pontoAparicaoCarro){
        // Desenhar o carro
        context.beginPath();
        context.fillRect(posicaoX, canvas.height - 250, larguraCarro, alturaCarro); // Desenha o carro com posição, largura e altura definidas
        context.fillStyle = "rgba(0, 0, 0, 0)"; // Define a cor de preenchimento do carro como vermelho
        context.fill(); // Preenche o carro com a cor definida
        context.closePath(); // Fecha o caminho do desenho do carro
    }

    // Desenhar o objeto sky
    context.beginPath();
    context.fillRect(posicaoXs + 320, posicaoYs + 300, 50, 80); // Desenha o objeto sky com posição, largura e altura definidas
    context.fillStyle = "rgba(0, 0, 0, 0)"; // Define a cor de preenchimento do objeto sky como vermelho
    context.fill(); // Preenche o objeto sky com a cor definida
    context.closePath(); // Fecha o caminho do desenho do objeto sky

    // Verificar colisão entre o carro e o objeto sky
    if (posicaoFundoX >= pontoAparicaoCarro) { // Verifica se o carro está na mesma posição do objeto sky
        if (posicaoX < posicaoXs + 320 + 50 && // Verifica a colisão na borda esquerda do carro
            posicaoX + larguraCarro > posicaoXs + 320 && // Verifica a colisão na borda direita do carro
            canvas.height - 250 < posicaoYs + 300 + 80 && // Verifica a colisão na borda superior do carro
            canvas.height - 250 + alturaCarro > posicaoYs) { // Verifica a colisão na borda inferior do carro
            console.log("relou"); // Exibe uma mensagem de colisão no console

            posicaoFundoX = 0;
            cidadeX = 0;
        }
    }
}