const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-lista');
console.log(h1.innerText);
console.log(animaisLista.innerHTML)

h1.innerHTML = '<p>Novo título</p>';


const lista = document.querySelector('.animais-lista');

console.log(lista);

console.log(lista.parentElement); //retorna o pai
console.log(lista.previousElementSibling); //retorna o elemento anterior
console.log(lista.nextElementSibling); //retorna o elemento posterior

console.log(lista.children); //retorna uma HTML collection dos filhos
console.log(lista.children[0]); //acessa o primeiro filho da lista

console.log(lista.children[--lista.children.length]); //retorna o último filho da lista

console.log(lista.querySelector('li:last-child'));

console.log(lista.childNodes);
console.log(lista.previousSibling);

const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = document.querySelector('.titulo');

// animais.appendChild(titulo); //move item para o final do outro
const mapa = document.querySelector('.mapa')

// contato.removeChild()

// contato.insertBefore(animais, mapa)

//criar elementos

const novoh1 = document.querySelector('h1');

// novoh1.innerText = 'Novo titulo';
// novoh1.classList.add('titulo');
// mapa.appendChild(novoh1);


const faq = document.querySelector('.faq');

const cloneh1 = novoh1.cloneNode(true);

cloneh1.classList.add('azul');
faq.appendChild(cloneh1);