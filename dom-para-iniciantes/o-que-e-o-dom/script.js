// window.alert('Isso mesmo!')

// const href = window.location.href;

// console.log(`O site está rodando no seguinte link ${href}`);

// const h1Selecionado = document.querySelector('h1');
// const h1Classes = h1Selecionado.classList;

// function callbackh1(){
//     console.log('Clicou em', h1Selecionado.innerText)
// }

// h1Selecionado.addEventListener('click', callbackh1);


//EXERCÍCIO 

url = window.location.href;
elementoAtivo = document.querySelector('.ativo');
linguagemNavegador = window.navigator.language;
larguraJanela = window.innerWidth;
elementoAzul = document.querySelector('.azul');

elementoAzul.style.color = "blue";

console.log(`a URL atual é ${url}, o elemento ativo é ${elementoAtivo.innerText}, a linguagem do navegador é ${linguagemNavegador} e a largura da janela é ${larguraJanela}`);
