// Mude a cor da tela para azul e depois para vermelho a cada 2s.

// let corpo = document.querySelector("body");

// for (let i = 0; i < 20; i++) {
//   setTimeout(() => {
//     corpo.classList.toggle("vermelho");
//   }, 200 * i);
// }

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

let cronometro = document.querySelector('[data-cronometro="timer"]');
let botaoPausar = document.querySelector('[data-cronometro="pausar"]');
let botaoIniciar = document.querySelector('[data-cronometro="iniciar"]');

let contador = 0;
let intervalo;
let cliquesPausa = 0;

function iniciarCronometro() {
  intervalo = setInterval(() => {
    cronometro.innerText = contador++;
  }, 100);
  botaoIniciar.setAttribute("disabled", "");
}

function pausarCronometro() {
  clearInterval(intervalo);
  botaoIniciar.removeAttribute("disabled");
}

function resetarTempo() {
  contador = 0;
  cronometro.innerHTML = contador;
  cliquesPausa = 0;
}

botaoIniciar.addEventListener("click", iniciarCronometro);
botaoPausar.addEventListener("click", pausarCronometro);
botaoPausar.addEventListener("dblclick", resetarTempo);
