
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index, array) => {
    // console.log(item); //mostra o elemento
    // console.log(index); //mostra o index do elemento
    // console.log(array); //mostra o array
});

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

//Omitindo chaves de uma função que possui somente 1 linha de retorno
titulosArray.forEach((item) => console.log(item));

// Mostre no console cada parágrado do site

const todosParagrafos = document.querySelectorAll('p');

todosParagrafos.forEach((item) => console.log(item));

// Mostre o texto dos parágrafos no console

todosParagrafos.forEach((item) => console.log(item.innerText));


// Como corrigir os erros abaixo:
const imgs2 = document.querySelectorAll('img');

imgs2.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs2.forEach(() => {
  console.log(i++);
});

imgs2.forEach(() => console.log(i++));

