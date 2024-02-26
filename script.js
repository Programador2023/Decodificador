// ELEMENTS (onde voce acessa o DOM)
const wapperAside = document.querySelector(".conteudo-wrapper");
const encriptarBtn = document.querySelector(".btn__criptografar");
const textArea = document.querySelector(".input-top");

// FUNCTIONS AND VARIABLES (onde voce manipula o DOM)
let inputValue;
let textEncriptado;

// transforma uma string comum em uma string binaria
function textoParaBinary(string) {
  return string
  .split("")
  .map(function (char) {
    return char.charCodeAt(0).toString(2);
  })
  .join(" ");
}

// transforma uma string Binaria em uma string comum
function binarioParaText(str) {
  return str
    .split(" ")
    .map(function (elem) {
      return String.fromCharCode(parseInt(elem, 2));
    })
    .join("");
}

function encriptar() {
  // guardando uma string binaria na var textEncriptado
  textEncriptado = textoParaBinary(inputValue);
  wapperAside.innerHTML = textEncriptado
}

function decriptar() {}

function changeInput(event) {
  inputValue = event.target.value;
}

// EVENT LISTENERS (onde voce observa eventos no DOM )
textArea.addEventListener("input", changeInput);
encriptarBtn.addEventListener("click", encriptar);
