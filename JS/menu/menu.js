let isPlaying = 0; // Estado inicial para verificar o estado do botão

// Seleciona os elementos do HTML
const botao = document.getElementById("botao");
const icone = document.getElementById("icone");
const musicaDeFundo = document.getElementById("musicaDeFundo");

// Adiciona o evento ao clicar no botão (para pausar ou iniciar a musica)

function playMusica() {
    if (isPlaying == 0) {
        musicaDeFundo.play(); // Pausa a música
        icone.src = "/ASSETS/img/icons8-pausa-30.png"; // Atualiza o texto do botão
        icone.alt = "Reproduzir"; // Atualiza o texto do botão
        isPlaying = 1; // Atualiza o estado do botão
    } else {
        musicaDeFundo.pause(); // Reproduz a música
        icone.src = "/ASSETS/img/icons8-reproduzir-48.png";
        icone.alt = "Pausar";
        isPlaying = 0; // Atualiza o estado do botão
    }
}
