// =====================================
// CONTROLE DO TAMANHO DA FONTE
// =====================================

let tamanhoFonte = 20;

const aumentarFonte = document.getElementById("aumentarFonte");
const diminuirFonte = document.getElementById("diminuirFonte");

aumentarFonte.addEventListener("click", function () {

    if (tamanhoFonte < 40) {

        tamanhoFonte += 2;

        document.body.style.fontSize = tamanhoFonte + "px";
    }
});


diminuirFonte.addEventListener("click", function () {

    if (tamanhoFonte > 14) {

        tamanhoFonte -= 2;

        document.body.style.fontSize = tamanhoFonte + "px";
    }
});


// =====================================
// ALTO CONTRASTE
// =====================================

const altoContraste =
    document.getElementById("altoContraste");

altoContraste.addEventListener("click", function () {

    document.body.classList.toggle("alto-contraste");

});


// =====================================
// LEITURA EM VOZ ALTA
// =====================================

const lerPagina =
    document.getElementById("lerPagina");

const pararLeitura =
    document.getElementById("pararLeitura");


lerPagina.addEventListener("click", function () {

    // Para qualquer leitura anterior
    window.speechSynthesis.cancel();

    // Pega o texto principal da página
    const texto = document.querySelector("main").innerText;

    // Cria a leitura
    const leitura = new SpeechSynthesisUtterance(texto);

    // Define o idioma
    leitura.lang = "pt-BR";

    // Velocidade da voz
    leitura.rate = 0.9;

    // Tom da voz
    leitura.pitch = 1;

    // Volume
    leitura.volume = 1;

    // Inicia a leitura
    window.speechSynthesis.speak(leitura);
});


// =====================================
// PARAR LEITURA
// =====================================

pararLeitura.addEventListener("click", function () {

    window.speechSynthesis.cancel();

});