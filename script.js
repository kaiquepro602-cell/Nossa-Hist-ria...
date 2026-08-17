/* =========================================
   GAME - NOSSA HISTÓRIA ❤️
========================================= */


/* =========================================
   INICIAR JOGO
========================================= */

const botaoComecar = document.querySelector(".start-button");


if (botaoComecar) {

    botaoComecar.addEventListener("click", () => {

        const card = document.querySelector(".game-card");

        if (!card) return;

        card.style.animation =
            "desaparecer 0.7s ease forwards";

        setTimeout(() => {

            mostrarFase2();

        }, 700);

    });

}


/* =========================================
   FUNÇÃO PARA TROCAR O CONTEÚDO
========================================= */

function trocarConteudo(html) {

    const gameContainer =
        document.querySelector(".game-container");

    if (!gameContainer) return;

    gameContainer.innerHTML = html;

    /*
       Volta para o topo quando muda de fase.
    */
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   FASE 2
   PRIMEIRA MEMÓRIA
========================================= */

function mostrarFase2() {

    trocarConteudo(`

        <div class="game-card fase-2">

            <div class="photo-container">

                <img
                    src="imagens/foto1.jpg"
                    alt="Uma lembrança nossa"
                    class="memory-photo"
                >

            </div>


            <p class="small-title">
                UMA PRIMEIRA MEMÓRIA
            </p>


            <h1>
                Algumas lembranças<br>
                ficam para sempre...
            </h1>


            <p class="description">

                Talvez naquele momento fosse
                apenas mais um dia.

                <br><br>

                Mas olhando agora...

                <br>

                eu percebo o quanto
                gosto de guardar momentos assim
                ao seu lado.

            </p>


            <button
                class="next-button"
                type="button">

                CONTINUAR

                <span>→</span>

            </button>

        </div>

    `);


    const botao =
        document.querySelector(".next-button");

    if (botao) {

        botao.addEventListener(
            "click",
            mostrarFase3
        );

    }

}


/* =========================================
   FASE 3
   NOSSOS CAMINHOS
========================================= */

function mostrarFase3() {

    trocarConteudo(`

        <div class="game-card fase-3">

            <div class="photo-container">

                <img
                    src="imagens/foto2.jpg"
                    alt="Um momento juntos"
                    class="memory-photo"
                >

            </div>


            <p class="small-title">
                NOSSOS CAMINHOS
            </p>


            <h1>
                A vida é feita<br>
                de caminhos...
            </h1>


            <p class="description">

                E, de todos os caminhos que
                poderiam ter acontecido,

                <br><br>

                eu sou muito feliz por algum deles
                ter colocado você no meu.

            </p>


            <p class="question">

                <strong>
                    Será que algumas pessoas
                    realmente estão destinadas
                    a se encontrar?
                </strong>

            </p>


            <div class="choices">

                <button
                    class="choice-button"
                    type="button">

                    SIM ❤️

                </button>


                <button
                    class="choice-button"
                    type="button">

                    TALVEZ 🤔

                </button>

            </div>

        </div>

    `);


    const escolhas =
        document.querySelectorAll(
            ".choice-button"
        );


    escolhas.forEach(botao => {

        botao.addEventListener(
            "click",
            mostrarFase4
        );

    });

}


/* =========================================
   FASE 4
   PEQUENOS GESTOS
========================================= */

function mostrarFase4() {

    trocarConteudo(`

        <div class="game-card fase-4">

            <div class="photo-container">

                <img
                    src="imagens/foto3.jpg"
                    alt="Um pequeno gesto"
                    class="memory-photo"
                >

            </div>


            <p class="small-title">
                PEQUENOS GESTOS
            </p>


            <h1>
                Não são apenas<br>
                os grandes momentos...
            </h1>


            <p class="description">

                Às vezes são as coisas mais simples
                que acabam se tornando as nossas
                lembranças favoritas.

                <br><br>

                Um carinho.

                <br>

                Um sorriso.

                <br>

                Um pequeno gesto.

                <br><br>

                E de repente...

                <br>

                aquilo vira uma memória
                que a gente nunca quer esquecer.

            </p>


            <button
                class="next-button"
                type="button">

                CONTINUAR

                <span>→</span>

            </button>

        </div>

    `);


    const botao =
        document.querySelector(".next-button");


    if (botao) {

        botao.addEventListener(
            "click",
            mostrarFase5
        );

    }

}


/* =========================================
   FASE 5
   MOMENTOS
========================================= */

function mostrarFase5() {

    trocarConteudo(`

        <div class="game-card fase-5">

            <div class="photo-container">

                <img
                    src="imagens/foto4.jpg"
                    alt="Um momento especial"
                    class="memory-photo"
                >

            </div>


            <p class="small-title">
                MOMENTOS
            </p>


            <h1>
                A vida é feita<br>
                de momentos.
            </h1>


            <p class="description">

                E eu quero continuar colecionando
                momentos ao seu lado.

                <br><br>

                Quero mais risadas.

                <br>

                Mais abraços.

                <br>

                Mais histórias.

                <br>

                Mais dias comuns que acabam
                se tornando especiais.

            </p>


            <button
                class="next-button"
                type="button">

                TEM MAIS...

                <span>→</span>

            </button>

        </div>

    `);


    const botao =
        document.querySelector(".next-button");


    if (botao) {

        botao.addEventListener(
            "click",
            mostrarFase6
        );

    }

}


/* =========================================
   FASE 6
   CONEXÃO
========================================= */

function mostrarFase6() {

    trocarConteudo(`

        <div class="game-card fase-6">

            <div class="photo-container">

                <img
                    src="imagens/foto5.jpg"
                    alt="Um momento de carinho"
                    class="memory-photo"
                >

            </div>


            <p class="small-title">
                E ENTÃO EU PERCEBI...
            </p>


            <h1>
                Que eu não quero<br>
                apenas memórias.
            </h1>


            <p class="description">

                Eu quero continuar vivendo.

                <br><br>

                Quero continuar segurando
                sua mão.

                <br><br>

                Quero estar presente nos dias bons,
                nos dias difíceis e em todos aqueles
                dias que ainda nem conhecemos.

            </p>


            <p class="description">

                Porque, no fim...

                <br><br>

                <strong>
                    eu quero construir o futuro
                    com você.
                </strong>

            </p>


            <button
                class="next-button"
                type="button">

                UMA ÚLTIMA COISA...

                <span>→</span>

            </button>

        </div>

    `);


    const botao =
        document.querySelector(".next-button");


    if (botao) {

        botao.addEventListener(
            "click",
            mostrarPedido
        );

    }

}


/* =========================================
   PEDIDO FINAL ❤️
========================================= */

function mostrarPedido() {

    trocarConteudo(`

        <div class="game-card pedido-final">

            <div class="heart grande">
                ❤️
            </div>


            <p class="small-title">
                A PERGUNTA MAIS IMPORTANTE
            </p>


            <h1>
                Luana...
            </h1>


            <p class="final-question">

                Depois de todas essas memórias...

                <br><br>

                eu tenho uma última pergunta.

            </p>


            <p class="final-question destaque">

                Quer namorar comigo?

            </p>


            <div class="final-buttons">

                <button
                    class="yes-button"
                    id="yesButton"
                    type="button">

                    SIM ❤️

                </button>


                <button
                    class="yes-button"
                    id="yesButton2"
                    type="button">

                    CLARO QUE SIM! 💖

                </button>

            </div>

        </div>

    `);


    const botaoSim =
        document.querySelector("#yesButton");


    const botaoClaro =
        document.querySelector("#yesButton2");


    if (botaoSim) {

        botaoSim.addEventListener(
            "click",
            aceitou
        );

    }


    if (botaoClaro) {

        botaoClaro.addEventListener(
            "click",
            aceitou
        );

    }

}


/* =========================================
   ELA ACEITOU ❤️
========================================= */

function aceitou() {

    trocarConteudo(`

        <div class="game-card sucesso">

            <div class="heart grande">
                💖
            </div>


            <p class="small-title">
                UMA NOVA HISTÓRIA COMEÇA
            </p>


            <h1>
                EU SABIA! ❤️
            </h1>


            <p class="final-question">
                Agora oficialmente...
            </p>


            <p class="love-message">

                Você é a minha namorada. 🥰

            </p>


            <div class="hearts-final">

                ❤️ 💕 ❤️ 💕 ❤️

            </div>

        </div>

    `);


    criarCoracoes();

}


/* =========================================
   CHUVA DE CORAÇÕES
========================================= */

function criarCoracoes() {

    for (let i = 0; i < 40; i++) {

        const heart =
            document.createElement("div");


        heart.innerHTML = "❤️";


        heart.className =
            "coracao-final";


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.top =
            Math.random() * 100 + "vh";


        heart.style.fontSize =
            (15 + Math.random() * 35) + "px";


        heart.style.animationDelay =
            (Math.random() * 1.5) + "s";


        document.body.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 4500);

    }

}