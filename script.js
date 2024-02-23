// ELEMENTS (onde voce acessa o DOM)
const wapperAside = document.querySelector(".wapper__aside");
const encriptarBtn = document.querySelector(".btn__criptografar");
const textArea = document.querySelector(".input-top");

// FUNCTIONS AND VARIABLES (onde voce manipula o DOM)
let inputValue;
function encriptar() {
wapperAside.innerHTML = inputValue

let resultCripto = inputValue
}

function changeInput(event) {
  inputValue = event.target.value;
}

// EVENT LISTENERS (onde voce observa eventos no DOM )
encriptarBtn.addEventListener("click", encriptar);
textArea.addEventListener("input", changeInput);
